import { Router, Request, Response } from 'express';
import { MemoDatabase } from '../database/memo-database';
import JsonDb = require('node-json-db');

const db = new JsonDb(`${__dirname}/../database/notes.json`, true, true);


export class MemosController {


constructor(private memoDatabase = new MemoDatabase(db), public instance: Router = Router() ) {
  this.init();
 }

init() {
  this.instance.get('/memos', this.all);
  this.instance.get('/memos/:query', this.search);
  this.instance.get('/memo/:guid', this.single);
  this.instance.post('/memo/', this.create);
  this.instance.put('/memo/:guid', this.update);
  this.instance.delete('/memo/:guid', this.remove);
}

single = (req: Request, res: Response) => {

}

all = (req: Request, res: Response) => {
  res.status(200).send(this.memoDatabase.all());
}

search = (req: Request, res: Response) => {

}

create = (req: Request, res: Response) => {
  res.status(201).send('created');
}

update = (req: Request, res: Response) => {

}

remove = ({ params }: Request, res: Response) => {
  res.status(404).send();
//this.memoDatabase.remove(params.guid)
}

}

