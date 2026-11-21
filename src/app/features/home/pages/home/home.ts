import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { StrengthsBar } from '../../components/strengths-bar/strengths-bar';
import { FeaturedProducts } from '../../components/featured-products/featured-products';
import { AboutPreview } from '../../components/about-preview/about-preview';
import { Applications } from '../../components/applications/applications';
import { FactoryPreview } from '../../components/factory-preview/factory-preview';
import { ServicesOverview } from '../../components/services-overview/services-overview';
import { CtaSection } from '../../../../shared/components/cta-section/cta-section';

@Component({
  imports: [
    Hero,
    StrengthsBar,
    FeaturedProducts,
    AboutPreview,
    Applications,
    FactoryPreview,
    ServicesOverview,
    CtaSection,
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
