import * as uuid from "uuid";

class Appointment {
  id: string;
  provider: string;
  date: Date;

  constructor(provider: string, date: Date) {
    this.id = uuid.v4();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
