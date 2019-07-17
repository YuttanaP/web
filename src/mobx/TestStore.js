import { observable, computed, action } from "mobx";

class TestStore {
  @observable todos = [];
  @observable pendingRequests = 0;
  @observable lname = "???";
  @observable fname = "???";

  //@compute is something to not change the state.
  @computed get getFullName() {
    return this.fname + "  " + this.lname;
  }

  //@action is something to change the state.
  @action setName(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
}

export default new TestStore();
