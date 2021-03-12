import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-contentwrapper',
    templateUrl: './contentwrapper.component.html',
    styleUrls: ['./contentwrapper.component.scss']
})
export class ContentwrapperComponent implements OnInit {
    private toMatchMobile = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    public mobileMessage: string;
    public installMessage: string;
    private install = new Subject<string>();
    private mobile = new Subject<string>();
    @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert: NgbAlert;
    @ViewChild('installAlert', {static: false}) installAlert: NgbAlert;
    constructor() { }

    ngOnInit(): void {
        this.mobile.subscribe(message => this.mobileMessage = message);
        this.mobile.pipe(debounceTime(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
        this.install.subscribe(message => this.installMessage = message);
        this.install.pipe(debounceTime(5000)).subscribe(() => {
            if (this.installAlert) {
                this.installAlert.close();
            }
        });
        if (!this.detectMobile()) {
            this.mobile.next('Diese Seite ist für Mobil optimiert. Sie kann auch als App installiert werden');
        }
        if (!this.detectStandalone()){
            this.install.next('Diese Applikation lässt sich mittels "Teilen" als App hinzufügen.');
        }
    }

    private detectStandalone(): boolean {
        return ('standalone' in window.navigator);
    }

    private detectMobile(): boolean {
        return this.toMatchMobile.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }
}
