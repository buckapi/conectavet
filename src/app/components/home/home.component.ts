import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../ui/footer/footer.component';
import { RealtimeSpecialistsService } from '@app/services/realtime-specialists.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// import { PocketbaseService } from '@app/services/pocketbase.service';
import { CommonModule } from '@angular/common';
import { GlobalService } from '@app/services/global-service.service';

// Define la interfaz Specialty directamente en este archivo
interface Specialty {
  name: string;
  id: string;
  fatherId: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, FooterComponent,  MatButtonModule, 
    MatIconModule,CommonModule],
  templateUrl: './home.component.html',
  // styleUrl: './home.component.css'
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  showIcons = false;
  specialists: any[] = [];
  showOverlay = false;
  private subscription: Subscription = new Subscription();
  constructor(
    private realtimeSpecialistsService: RealtimeSpecialistsService,
    public global:GlobalService
  ) {}
  ngOnInit(): void {
    this.realtimeSpecialistsService.specialists$.subscribe((data) => {
      this.specialists = data;
  
    });
  }

  toggleIcons() {
    this.showIcons = !this.showIcons;
  }

  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
    this.showIcons = this.showOverlay; // Mostrar las opciones solo si el overlay está activo
  }
  
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
