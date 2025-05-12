import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { BaseFormComponent } from '../../../shared/components/base-form.component';

@Component({
  selector: 'app-preferences-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSliderModule,
    MatExpansionModule,
    MatDividerModule
  ],
  templateUrl: './preferences-form.component.html',
  styleUrls: ['./preferences-form.component.css']
})
export class PreferencesFormComponent extends BaseFormComponent implements OnInit {
  preferencesForm!: FormGroup;

  // Opciones para los selectores
  roomTypes = ['Standard', 'Deluxe', 'Suite', 'Presidential'];
  floorPreferences = ['Bajo', 'Medio', 'Alto', 'Sin preferencia'];
  pillowTypes = ['Suave', 'Medio', 'Firme'];
  viewTypes = ['Ciudad', 'Jardín', 'Playa', 'Piscina'];
  temperatureUnits = ['Celsius', 'Fahrenheit'];
  languageOptions = ['Español', 'Inglés', 'Francés', 'Alemán', 'Portugués'];
  communicationChannels = ['Email', 'SMS', 'Teléfono', 'Aplicación móvil'];
  dietaryRestrictions = ['Ninguna', 'Vegetariano', 'Vegano', 'Sin gluten', 'Sin lactosa', 'Kosher', 'Halal'];
  servicePreferences = ['Limpieza diaria', 'Cambio de toallas', 'Servicio despertador', 'Periódico', 'Almohadas adicionales'];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    super();
  }

  createForm() {
    this.preferencesForm = this.fb.group({
      // Sección 1: Preferencias de habitación
      roomPreferences: this.fb.group({
        preferredRoomType: ['', Validators.required],
        preferredFloor: [''],
        nonSmokingRoom: [true],
        quietRoom: [false],
        preferredView: [''],
        extraBlankets: [false],
        pillowType: ['Medio'],
        roomTemperature: [21]
      }),

      // Sección 2: Preferencias de alimentación
      diningPreferences: this.fb.group({
        dietaryRestrictions: [''],
        breakfastIncluded: [true],
        breakfastTime: ['07:30'],
        minibarPreference: [true],
        preferredCuisine: [''],
        coffeeTeaPreference: ['Café'],
        diningExperience: ['Restaurante']
      }),

      // Sección 3: Preferencias de servicios
      servicePreferences: this.fb.group({
        cleaningSchedule: ['Mañana'],
        turndownService: [false],
        wakeupCalls: [false],
        newspaperDelivery: [false],
        specialServices: [''],
        parkingService: [false],
        spaPreferences: [''],
        checkinPreference: ['Express']
      }),

      // Sección 4: Comunicación y notificaciones
      communicationPreferences: this.fb.group({
        preferredLanguage: ['Español', Validators.required],
        temperatureUnit: ['Celsius'],
        preferredCurrency: ['EUR'],
        notificationMethod: ['Email'],
        receivePromotions: [false],
        feedbackFrequency: ['Al finalizar estancia'],
        allowDataCollection: [true]
      })
    });
  }

  onSubmit() {
    if (this.preferencesForm.invalid) {
      this.preferencesForm.markAllAsTouched();
      return;
    }

    const formValue = this.preferencesForm.value;
    console.log('Preferencias guardadas:', formValue);

    // Aquí iría la llamada al servicio para guardar las preferencias

    // Mostrar mensaje de éxito
    alert('Preferencias guardadas correctamente');
  }

  resetForm() {
    this.preferencesForm.reset({
      roomPreferences: {
        nonSmokingRoom: true,
        quietRoom: false,
        roomTemperature: 21,
        pillowType: 'Medio'
      },
      diningPreferences: {
        breakfastIncluded: true,
        breakfastTime: '07:30',
        minibarPreference: true
      },
      communicationPreferences: {
        preferredLanguage: 'Español',
        temperatureUnit: 'Celsius',
        preferredCurrency: 'EUR',
        allowDataCollection: true
      }
    });
  }

  ngOnInit() {
    this.createForm();
  }
}
