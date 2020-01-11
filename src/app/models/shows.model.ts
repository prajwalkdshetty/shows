export interface ShowsDetails {
  Status: string;
  Species: string;
  Gender: string;
  Image: string;
  Origin: string;
  LastLocation: string;
}
export interface Shows {
  id: string;
  Name: string;
  Created: Date;
  details: ShowsDetails;
}
