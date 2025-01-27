import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'http://localhost:5000/api/Patient'; // Update to match your API's URL

  constructor(private http: HttpClient) {}

  getAllPatients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/GetAllPatients`);
  }

  getPatientByID(patientId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetPatientByID/${patientId}`);
  }

  insertPatient(patient: any): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/InsertPatient`, patient);
  }

  updatePatient(patientId: number, patient: any): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/UpdatePatient/${patientId}`, patient);
  }

  searchPatients(searchTerm: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/SearchPatients/${searchTerm}`);
  }
}
