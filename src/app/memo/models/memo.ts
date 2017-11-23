import { Todo } from './todo';

export class Memo {
  priority = 0;
  backgroundColor = 'white';
  public guid: string;

  constructor(
    public title: string,
    public text: string,
    public todos: Todo[]) {}
}
