import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/angular';
import { createEventId, INITIAL_EVENTS } from 'src/app/event-utils';
import { Calendar, EventInput } from '@fullcalendar/core';
import { ReunionDto } from 'src/app/common/reunion.dto';
import { ReunionService } from 'src/app/services/reunion.service';
@Component({
  selector: 'app-ver-reuniones',
  templateUrl: './ver-reuniones.component.html',
  styleUrls: ['./ver-reuniones.component.css']
})
export class VerReunionesComponent implements OnInit {

  constructor(
    private reunionService: ReunionService,
  ) { }

  reuniones: ReunionDto[];
  nombreUsuario = localStorage.getItem("name");
  loading=false;
  eventGuid = 0;
  eventosReuniones: EventInput[] = [];
  TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
  calendarOptions: CalendarOptions
  currentEvents: EventApi[]
  calendarVisible: Boolean;

  ngOnInit(): void {

    this.reunionService
     .getByConvocante(localStorage.getItem("name"))
     .subscribe({
      next: (reunionesReceived: ReunionDto[]) => {
        this.reuniones = reunionesReceived;
        console.log(this.reuniones);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => (this.updateCalendar()),
    });

    
  }
  

  updateCalendar(): void {
    this.reuniones.forEach(reunion => {
      console.log(reunion.temas);
      let evento: EventInput = 
        {
          id: createEventId(),
          title: reunion.temas,
          start: this.TODAY_STR + 'T19:00:00',
          end: this.TODAY_STR +  'T19:30:00'
        }
      this.eventosReuniones.push(evento);
      console.log(this.eventosReuniones);
    });
    this.calendarVisible = true;
    this.calendarOptions= {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
      },
      initialView: 'dayGridMonth',
      initialEvents: this.eventosReuniones, // alternatively, use the `events` setting to fetch from a feed
      weekends: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      select: this.handleDateSelect.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents.bind(this)
      /* you can update a remote database when these fire:
      eventAdd:
      eventChange:
      eventRemove:
      */
    };
    this.currentEvents = [];
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    //Implementar si queremos que haga algo al hacer click en la reunion en el calendario.
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  createEventId() {
    return String(this.eventGuid++);
  }
}
