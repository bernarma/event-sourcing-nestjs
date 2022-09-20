import { IEvent } from '@nestjs/cqrs';
import { IViewUpdater } from './interfaces/view-updater';
import { Type, Logger } from '@nestjs/common';
import { ViewUpdater } from './view-updater';

export class ViewUpdaters {
  private static updaters = new Map<string, Type<IViewUpdater<IEvent>>>();
  private static logger = new Logger(ViewUpdaters.name);

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static add(name: string, handler: Type<IViewUpdater<IEvent>>) {
    this.logger.debug(`adding updater: ${name} - ${handler}`);
    ViewUpdaters.updaters.set(name, handler);
  }

  static get(name: string): Type<IViewUpdater<IEvent>> {
    const updater = ViewUpdaters.updaters.get(name);
    this.logger.debug(updater);
    return updater;
  }
}
