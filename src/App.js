import React, { useState } from 'react';
import './App.css';
import {registerNewStudent} from './services/student';

function App() {
  let initialStudent =  {
    fullName: null,
    email: null,
    phoneNumber: null,
    "isBoy?": null,
    dateOfBirth: null,
    placeOfBirth: null, 
    programId: null
  }

  const [student, setStudent] = useState(initialStudent);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const submitForm = async(object) => {
    const [err, student] = await registerNewStudent(object);
    
    if (student){
      setSubmitted(true);
    }
    else{
      setError(err);
      console.log(err);
    }
  };

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setStudent({...student, [name]: value});
  }

  return (
    <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      {
        submitted 
          ?
          <p>Coming soon</p>
          :
          <div class="wrapper wrapper--w680">
            <div class="card card-4">
              <div class="card-body">
                <h2 class="title">Formulir Pendaftaran Mahasiswa Baru STMIK-STIE Mikroskil</h2>
                <form onSubmit={(event) => {
                  event.preventDefault()
                  submitForm(student);
                }}>
                  {
                    error 
                      ?
                        <div>
                          <h3>Ada beberapa error yang perlu diperbaiki :</h3>
                          <ul>
                            <li></li>
                          </ul>
                        </div>
                      : null
                  }
                  <div class="row row-space">
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">Nama Lengkap</label>
                        <input class="input--style-4" type="text" name="name" value={student.fullName} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-group">
                      <label class="label">Jenis Kelamin</label>
                        <div class="p-t-10">
                          <label class="radio-container m-r-45">Pria
                            <input type="radio" checked="checked" name="isBoy?" />
                            <span class="checkmark"></span>
                          </label>
                          <label class="radio-container">Wanita
                            <input type="radio" name="isBoy?" />
                            <span class="checkmark"></span>
                          </label>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div class="row row-space">
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">Tempat Lahir</label>
                        <input class="input--style-4" type="text" name="placeOfBirth" value={student.placeOfBirth} onChange={handleInputChange}/>
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">Tanggal Lahir</label>
                        <div class="input-group-icon">
                          <input class="input--style-4 js-datepicker" type="date" name="dateOfBirth" value={student.dateOfBirth} onChange={handleInputChange} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row row-space">
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">Email</label>
                        <input class="input--style-4" type="email" name="email" value={student.email} onChange={handleInputChange}/>
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">No Handphone</label>
                        <input class="input--style-4" type="text" name="phoneNumber" value={student.phoneNumber} onChange={handleInputChange}/>
                      </div>
                    </div>
                  </div>
                  <div class="input-group">
                    <label class="label">Program Studi</label>
                    <div>
                      <select name="programId" class="input--style-4 program">
                        <option disabled="disabled" selected="selected">Pilih salah satu</option>
                        <option value="1">S1 - Teknik Informatika</option>
                        <option value="2">S1 - Sistem Informasi</option>
                        <option value="3">S1 - Manajemen</option>
                        <option value="4">S1 - Akuntansi</option>
                        <option value="5">D3 - Manajemen Informatika</option>
                        <option value="6">S2 - Teknologi Informasi</option>
                      </select>
                      <div class="select-dropdown"></div>
                    </div>
                  </div>
                  <div class="p-t-15">
                    <button class="btn btn--radius-2 btn--blue">Daftar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      }
      
    </div>
  );
}

export default App;
