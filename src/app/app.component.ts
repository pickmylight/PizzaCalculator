import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

export interface AppData {
    version: string;
    changelog: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public title = 'pizza-app';
    constructor(private readonly swUpdate: SwUpdate) { }

    ngOnInit(): void {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe((evt) => {
                const changeLog = 'changelog';
                const version = 'version';
                const updateApp = window.confirm(`
        Ein Update ist verfügbar (${evt.current.appData[version]} => ${evt.available.appData[version]}).
        Änderungen: ${evt.current.appData[changeLog]}
        Wollen Sie das Update jetzt installieren?
      `);
                if (updateApp) { window.location.reload(); }
            });
        }
    }
}
