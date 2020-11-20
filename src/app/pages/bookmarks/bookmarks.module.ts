import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BookmarksPage } from './containers/bookmarks/bookmarks.page';
import { bookmarkReducer } from 'src/app/pages/bookmarks/containers/state/bookmarks.reducer';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { BookmarksEffects } from 'src/app/pages/bookmarks/containers/state/bookmarks.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
    EffectsModule.forFeature([BookmarksEffects]),
    ComponentsModule,
  ],
  declarations: [
    BookmarksPage,
  ],
})
export class BookmarksModule {
}
