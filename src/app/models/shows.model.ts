export interface ShowsDetails {
  Status: string;
  Species: string;
  Gender: string;
  Origin: string;
  LastLocation: string;
}
export interface Shows {
  Id: string;
  Name: string;
  Created: Date;
  Image: string;
  details: ShowsDetails;
}
