import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';

interface User {
  id: number;
  hotelId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  department?: string;
  createdAt: string;
  devicePreferences: any;
}

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  @Input() user?: User;

  // Datos de prueba estáticos
  mockUser: User = {
    id: 1,
    hotelId: 101,
    firstName: 'Carlos',
    lastName: 'Rodríguez',
    email: 'carlos.rodriguez@example.com',
    phone: '+34 612 345 678',
    role: 'admin',
    department: 'Dirección General',
    createdAt: '2022-08-15T09:00:00Z',
    devicePreferences: {
      darkMode: true,
      notifications: true
    }
  };

  roleColors: Record<string, string> = {
    admin: 'primary',
    staff: 'accent',
    guest: 'default'
  };

  constructor() {}

  ngOnInit(): void {
    // Si no hay usuario proporcionado, usar el usuario de prueba
    if (!this.user) {
      this.user = this.mockUser;
    }
  }

  get fullName(): string {
    return `${this.user?.firstName} ${this.user?.lastName}`;
  }

  get roleIcon(): string {
    const icons: Record<string, string> = {
      admin: 'admin_panel_settings',
      staff: 'badge',
      guest: 'person'
    };
    return icons[this.user?.role || ''] || 'person';
  }

  get creationDate(): string {
    if (!this.user?.createdAt) return '';
    return new Date(this.user.createdAt).toLocaleDateString();
  }
}
