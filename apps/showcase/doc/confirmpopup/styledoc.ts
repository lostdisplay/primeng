import { Component } from '@angular/core';

@Component({
    selector: 'confirm-popup-style-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>
                Following is the list of structural style classes, for theming classes visit
                <a href="#" [routerLink]="['/theming']">theming</a> page.
            </p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-confirm-popup</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-confirm-popup-content</td>
                        <td>Content element.</td>
                    </tr>
                    <tr>
                        <td>p-confirm-popup-icon</td>
                        <td>Message icon.</td>
                    </tr>
                    <tr>
                        <td>p-confirm-popup-message</td>
                        <td>Message text.</td>
                    </tr>
                    <tr>
                        <td>p-confirm-popup-footer</td>
                        <td>Footer element for buttons.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})
export class StyleDoc {}
