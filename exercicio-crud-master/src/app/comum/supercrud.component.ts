import { OnInit } from '@angular/core';

import { Message } from 'primeng/primeng';

export class SuperCrud implements OnInit {

    msgs: Message[] = [];

    constructor(protected service) {
    }

    ngOnInit() {
        this.service.errorHandler = error => this.error(error);
    }

    error(erro) {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: erro });
    }

}
