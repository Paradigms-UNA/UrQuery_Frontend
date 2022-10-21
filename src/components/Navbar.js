import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'

export const Navbar = () => {
    return (
        <body>
        <nav className="navbar navbar-light shadow-lg">
            <div className="container-fluid justify-content-end">
                <button type="button" className="btn btn-warning px-4 me-3" data-bs-toggle="modal" data-bs-target="#modalInfo" >About</button>
            </div>
        </nav>
        <div class="modal" tabindex="-1">
            <div class="modal fade" id="modalInfo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
        </body>

    )
}
