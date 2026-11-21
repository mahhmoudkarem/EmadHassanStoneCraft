import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';
import { WhatsappButton } from '../../shared/components/whatsapp-button/whatsapp-button';

@Component({
  imports: [Navbar, RouterOutlet, Footer, WhatsappButton],
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
})
export class MainLayout {}
