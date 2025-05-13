import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,  
    MatFormFieldModule, 
    MatSelectModule,  
    MatOptionModule,
    MatCardModule
  ]
})
export class CalendarioComponent implements OnInit {
  months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  years: number[] = [];
  selectedMonth!: number;
  selectedYear!: number;

  ngOnInit() {
    const currentDate = new Date();
    this.selectedMonth = currentDate.getMonth();
    this.selectedYear = currentDate.getFullYear();
    this.generateYears();
    this.updateCalendar();
  }

  generateYears() {
    const startYear = 2025;
    const endYear = 2030;
    for (let y = startYear; y <= endYear; y++) {
      this.years.push(y);
    }
  }

  calendarDays: { date: number | null, text: string }[] = [];

  updateCalendar() {
    this.calendarDays = [];

    const firstDay = new Date(this.selectedYear, this.selectedMonth, 1);
    const lastDay = new Date(this.selectedYear, this.selectedMonth + 1, 0);

    const firstWeekDay = firstDay.getDay(); // 0 = domingo, 1 = segunda, etc.
    const daysInMonth = lastDay.getDate();

    // Adiciona espaços vazios antes do primeiro dia (segunda a domingo = 1 a 7)
    const leadingEmpty = firstWeekDay === 0 ? 6 : firstWeekDay - 1;
    for (let i = 0; i < leadingEmpty; i++) {
      this.calendarDays.push({ date: null, text: '' });
    }

    // Adiciona os dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
      this.calendarDays.push({ date: day, text: '' });
    }
  }
  // Método para adicionar texto ao dia selecionado
  autoResize(event: Event): void {
  const textarea = event.target as HTMLTextAreaElement;
  textarea.style.height = 'auto'; // Reseta para pegar a altura mínima
  textarea.style.height = textarea.scrollHeight + 'px'; // Ajusta para altura do conteúdo
}

}
