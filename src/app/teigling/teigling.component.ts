import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teigling',
  templateUrl: './teigling.component.html',
  styleUrls: ['./teigling.component.scss']
})
export class TeiglingComponent implements OnInit {
  public steps = [
    {
      title: '1. Schritt',
      text: 'Zutaten in einer Schüssel vermengen und dann ausserhalb der Schüssel mindestens 5 Minuten durchkneten.'
    },
    {
      title: '2. Schritt',
      text: 'Den Teig zugedeckt und gekühlt 24 Stunden gehen lassen. Nach 12 Stunden den Teig einmal auf "links" drehen.'
    },
    {
      title: '3. Schritt',
      text: 'Etwa eine Stunde vor der Zubereitung den Teig portitionieren und nochmals zugedeckt gehen lassen.'
    },
    {
      title: 'Pizza machen',
      text: 'Den Teig mit den Händen in die gewünschte Form bringen, um einen dünnen Boden und crossen Rand zu erhalten.'
    },
    {
      title: 'Backen',
      text: 'Bei 250-270°C im Ofen auf einem flachen Blech backen.'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
