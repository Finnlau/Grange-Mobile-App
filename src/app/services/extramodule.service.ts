import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import {map, take } from'rxjs/operators';
import { Observable } from 'rxjs';

export interface ExtraModule{
  moduleID?: string,
  moduleNo: string,
  moduleName: string,
  moduleCredits: string,
}

@Injectable({
  providedIn: 'root'
})
export class ExtramoduleService {
  //Reference to students Observable
  private extramodules: Observable<ExtraModule[]>;
  //Reference to the studentCollection for Update/Delete Operations
  private ExtraModuleCollection: AngularFirestoreCollection<ExtraModule>;

  constructor(private afs: AngularFirestore) {
    //Get a reference to the studnets collection
    this.ExtraModuleCollection = this.ExtraModuleCollection = this.afs.collection<ExtraModule>('extramodule-1');
    //Get a reference to a snapshot of the student collection data, i.e an observable that
    //provides the actual arrays of students when subscribed to (emits the values!)
    this.extramodules =  this.ExtraModuleCollection.snapshotChanges().pipe(
      map(extramodules => {
        return extramodules.map(extramodule => {
          const data = extramodule.payload.doc.data();
          const moduleID = extramodule.payload.doc.id;
          return { moduleID, ...data };
        });

      })
    );
  } 

  getExtraModules(): Observable<ExtraModule[]> {
    return this. extramodules;
  }

  // This studentID refers to the id in Firebase, needed to update or delete
  getExtraModule(moduleID:string): Observable<ExtraModule> {
    return this.ExtraModuleCollection.doc<ExtraModule>(moduleID).valueChanges().pipe(
      take(1),
      map(extramodule => {
        extramodule.moduleID = moduleID;
        return extramodule
      })
    );
  }

  addExtraModule(extramodule: ExtraModule): Promise<DocumentReference> {
    return this.ExtraModuleCollection.add(extramodule);
  }

  updateExtraModule(extramodule: ExtraModule): Promise<void> {
    return this.ExtraModuleCollection.doc(extramodule.moduleID).update({ moduleNo: extramodule.moduleNo, moduleName: extramodule.moduleName, moduleCredits: extramodule.moduleCredits});
  }

  deleteExtraModule(moduleID: string): Promise<void> {
    return this.ExtraModuleCollection.doc(moduleID).delete();
  }


}

  

