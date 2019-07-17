import { action, computed, observable } from "mobx";

class Mobx {
  @observable name = "hello, mobx";
  @observable count = 0;
  @observable title = "Title name";

  //@action is something to change the state.
  @action increment() {
    this.count += 1;
  }

  @action setName(name) {
    this.name = name;
  }

  //@compute is something to not change the state.
  @computed
  get getCount() {
    return this.count;
  }

  @computed
  get getName() {
    return this.name;
  }
}

export default new Mobx();
