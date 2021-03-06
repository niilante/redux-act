import {
  createAction, createReducer, batch, disbatch, types
} from '../types'

const actionCreators = [
  createAction(),
  createAction('aze'),
  createAction('aze', () => true),
  createAction('aze', () => true, () => 1),
  createAction(() => 1),
  createAction(() => "a", () => true)
]

const act1 = createAction((count: number) => count + 1)

function onOff(on, off) {
  on(act1, () => 1)
}

const reducers = [
  createReducer({}),
  createReducer({}, {}),
  createReducer<number>({ [act1.getType()]: () => 1 }, 0),
  createReducer<boolean>(onOff, true),
  createReducer<number>(onOff, 1)
]

const batches = [
  batch(act1(), act1()),
  batch([act1(), act1()])
]

types.add('one')
types.add('two')
types.remove('two')
const whatever1 = (true === types.has('one'))
const whatever2 = (false === types.has('two'))
const whatever3 = (['one'] === types.all())
types.clear()
