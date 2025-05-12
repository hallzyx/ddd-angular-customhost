import { Component } from '@angular/core';
import {PreferencesFormComponent} from '../../components/preferences-form/preferences-form.component';

@Component({
  selector: 'app-preferences',
  imports: [
    PreferencesFormComponent
  ],
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.css'
})
export class PreferencesComponent {

}
