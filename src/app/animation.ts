import {trigger, state, style, animate, transition, stagger, query, sequence} from '@angular/animations'

export let fade = trigger('fade', [
    state('void', style({ transform: 'translateY(-1rem)', opacity: 0})),

    transition(':enter, :leave', [
        animate(200)
    ])
]);

export let invoiceAni = trigger('invoiceAni', [
    transition('* => *', [
        query(".invoice", [
            style({transform: "translateY(-2rem)", opacity: 0})
        ]),
        sequence([
            query(".invoice", [
                stagger(200, [
                    animate("400ms ease", style({opacity: 1, transform: "none"}))
                ])
            ])
        ])
    ])
]);