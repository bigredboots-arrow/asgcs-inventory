import { filter } from 'rxjs/operators';
import { NgModule, OnInit } from '@angular/core';
import { Routes, Router, RouterModule, NavigationEnd } from '@angular/router';
import { DashboardComponent } from './pages/dashboard.component';
import { DemandOverviewComponent } from './pages/demand/demand-overview/demandOverview.component';
import { DemandDiscoverComponent } from './pages/demand/demand-discover/demandDiscover.component';
import { DemandReportsComponent } from './pages/demand/demand-reports/demandReports.component';
import { DemandReportsWavechartComponent } from './pages/demand/demand-reports-wavechart/demandReportsWavechart.component';
import { DemandReportsTotalDemandComponent } from './pages/demand/demand-reports-totaldemand/demandReportsTotalDemand.component';
import { DemandReportsLocationsComponent } from './pages/demand/demand-reports-locations/demandReportsLocations.component';
import { DemandReportsProfileComponent } from './pages/demand/demand-reports-profile/demandReportsProfile.component';

import { OutboundOverviewComponent } from './pages/outbound/outbound-overview/outboundOverview.component';
import { OutboundDiscoverComponent } from './pages/outbound/outbound-discover/outboundDiscover.component';
import { OutboundReportsComponent } from './pages/outbound/outbound-reports/outboundReports.component';
import { OutboundReportsLocationsComponent } from './pages/outbound/outbound-reports-locations/outboundReportsLocations.component';
import { OutboundReportsTotaldemandComponent } from './pages/outbound/outbound-reports-totaldemand/outboundReportsTotaldemand.component';
import { OutboundReportsWavechartComponent } from './pages/outbound/outbound-reports-wavechart/outboundReportsWavechart.component';
import { OutboundReportsProfileComponent } from './pages/outbound/outbound-reports-profile/outboundReportsProfile.component';

import { HubsComponent } from './pages/hubs/hubs/hubs.component';
import { InventoryComponent } from './pages/inventory/inventory/inventory.component';
import { SettingsComponent } from './pages/settings/settings/settings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: '8Main Page', breadcrumb: 'Dashboard' },
  },
  {
    path: 'demandOverview',
    component: DemandOverviewComponent,
    data: { title: '1Main Page', breadcrumb: 'Overview' },
  },
  {
    path: 'demandDiscover',
    component: DemandDiscoverComponent,
    data: { title: '2Main Page', breadcrumb: 'Discover' },
  },
  {
    path: 'demandReports',
    component: DemandReportsComponent,
    data: {
      title: '3Main Page',
      breadcrumb: 'Reports',
      filter: true,
    },
  },
  {
    path: 'demandReportsWavechart',
    component: DemandReportsWavechartComponent,
    data: {
      title: '9Main Page',
      breadcrumb: 'Activity Report',
      filter: true,
    },
  },
  {
    path: 'demandReportsLocations',
    component: DemandReportsLocationsComponent,
    data: {
      title: '11Main Page',
      breadcrumb: 'Locations Report',
      filter: true,
    },
  },
  {
    path: 'demandReportsProfile',
    component: DemandReportsProfileComponent,
    data: {
      title: '14Main Page',
      breadcrumb: 'Profile Report',
      filter: true,
    },
  },
  {
    path: 'demandReportsTotalDemand',
    component: DemandReportsTotalDemandComponent,
    data: {
      title: '4Main Page',
      breadcrumb: 'Status Report',
      filter: true,
    },
  },
  {
    path: 'outboundOverview',
    component: OutboundOverviewComponent,
    data: { title: '5Main Page', breadcrumb: 'Overview' },
  },
  {
    path: 'outboundDiscover',
    component: OutboundDiscoverComponent,
    data: { title: '7Main Page', breadcrumb: 'Discover' },
  },
  {
    path: 'outboundReports',
    component: OutboundReportsComponent,
    data: {
      title: '6Main Page',
      breadcrumb: 'Reports',
      filter: true,
    },
  },

  {
    path: 'outboundReportsWavechart',
    component: OutboundReportsWavechartComponent,
    data: {
      title: '6Main Page',
      breadcrumb: 'Activity Report',
      filter: true,
    },
  },
  {
    path: 'outboundReportsLocations',
    component: OutboundReportsLocationsComponent,
    data: {
      title: '6Main Page',
      breadcrumb: 'Locations Report',
      filter: true,
    },
  },
  {
    path: 'outboundReportsProfile',
    component: OutboundReportsProfileComponent,
    data: {
      title: '6Main Page',
      breadcrumb: 'Profile Report',
      filter: true,
    },
  },
  {
    path: 'outboundReportsTotaldemand',
    component: OutboundReportsTotaldemandComponent,
    data: {
      title: '6Main Page',
      breadcrumb: 'Status Report',
      filter: true,
    },
  },
  {
    path: 'hubs',
    component: HubsComponent,
    data: { title: '12Main Page', breadcrumb: '' },
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    data: { title: '13Main Page', breadcrumb: '' },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'settings Page', breadcrumb: 'Settings', filter: true },
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule implements OnInit {
  public href: string = '';
  public url = '';

  constructor(private router: Router) {
    router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.url = route.url;
        if (this.url && this.url.length > 0) {
          this.url = this.url.slice(1);
        }
      }
    });
  }

  ngOnInit() {
    this.href = this.router.url;
  }
}
