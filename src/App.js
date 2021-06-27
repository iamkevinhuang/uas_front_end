import React, { useState } from 'react';
import './App.css';
import { registerNewStudent } from './services/student';

function App() {
  let initialStudent = {
    fullName: null,
    email: null,
    phoneNumber: null,
    'isBoy?': null,
    dateOfBirth: null,
    placeOfBirth: null,
    programId: null,
  };

  const [student, setStudent] = useState(initialStudent);
  const [errors, setErrors] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const submitForm = async (object) => {
    const [err, student] = await registerNewStudent(object);

    if (student) {
      setSubmitted(true);
    } else {
      setErrors(err.response.data.error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
    console.log(student);
  };

  return (
    <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      {submitted ? (
        <div class="wrapper wrapper--w680">
          <div class="card card-4">
            <div class="card-body">
              <h3>Terima Kasih telah mendaftaran di STMIK-STIE Mikroskil</h3>
              <hr />
              <br />
              <h5>
                Pendaftaran anda saat ini telah kami terima, anda akan segera
                dihubungi oleh staff Marketing kami.
              </h5>
              <br />
              <h6>Berikut adalah informasi pendaftaran Anda !</h6>
              <br />
              <table class="table table-bordered">
                <tr>
                  <td>Nama</td>
                  <td>{student.fullName}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{student.email}</td>
                </tr>
                <tr>
                  <td>No Telepon</td>
                  <td>{student.phoneNumber}</td>
                </tr>
                <tr>
                  <td>Jenis Kelamin</td>
                  <td>{student['isBoy?'] ? 'Pria' : 'Wanita'}</td>
                </tr>
                <tr>
                  <td>Tempat / Tanggal Lahir</td>
                  <td>
                    {student.placeOfBirth} / {student.dateOfBirth}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div class="wrapper wrapper--w680">
          <div class="card card-4">
            <div class="card-body">
              <h2 class="title">
                Formulir Pendaftaran Mahasiswa Baru STMIK-STIE Mikroskil
              </h2>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  submitForm(student);
                }}
              >
                {errors ? (
                  <div class="error-dialog-box">
                    <h5>Ada beberapa error yang perlu diperbaiki :</h5>
                    <ul>
                      {console.log(errors)}
                      {errors.map((error) => (
                        <li class="m-l-25">{error}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div class="row row-space">
                  <div class="col-2">
                    <div class="input-group">
                      <label class="label">Nama Lengkap</label>
                      <input
                        class="input--style-4"
                        type="text"
                        name="fullName"
                        value={student.fullName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="input-group">
                      <label class="label">Jenis Kelamin</label>
                      <div class="p-t-10">
                        <label class="radio-container m-r-45">
                          Pria
                          <input
                            type="radio"
                            name="isBoy?"
                            value="true"
                            onChange={handleInputChange}
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="radio-container">
                          Wanita
                          <input
                            type="radio"
                            name="isBoy?"
                            value="false"
                            onChange={handleInputChange}
                          />
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
                      <input
                        class="input--style-4"
                        type="text"
                        name="placeOfBirth"
                        value={student.placeOfBirth}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="input-group">
                      <label class="label">Tanggal Lahir</label>
                      <div class="input-group-icon">
                        <input
                          class="input--style-4"
                          type="date"
                          name="dateOfBirth"
                          value={student.dateOfBirth}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-space">
                  <div class="col-2">
                    <div class="input-group">
                      <label class="label">Email</label>
                      <input
                        class="input--style-4"
                        type="email"
                        name="email"
                        value={student.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="input-group">
                      <label class="label">No Handphone</label>
                      <input
                        class="input--style-4"
                        type="text"
                        name="phoneNumber"
                        value={student.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div class="input-group">
                  <label class="label">Program Studi</label>
                  <div>
                    <select
                      name="programId"
                      class="input--style-4 program"
                      onChange={handleInputChange}
                    >
                      <option disabled="disabled" selected="selected">
                        Pilih salah satu
                      </option>
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
      )}
    </div>
  );
}

export default App;
