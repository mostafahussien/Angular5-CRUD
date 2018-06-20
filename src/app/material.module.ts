import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatTableModule, MatSortModule, MatInputModule, MatGridListModule } from '@angular/material';
import { MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatTableModule, MatSortModule, MatInputModule, MatGridListModule, MatSelectModule,
        MatDatepickerModule, MatNativeDateModule],
    exports: [MatButtonModule, MatToolbarModule, MatTableModule, MatSortModule, MatInputModule, MatGridListModule,
        MatSelectModule, MatDatepickerModule, MatNativeDateModule],
})
export class MaterialModule { }
