import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="d-flex flex-column h-100">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../public/logo-icon-no-background.svg" height="32" class="d-inline-block align-text-top">
          My Game Collection
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Game List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pile of Shame</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">My User</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <main class="flex-shrink-0">
    
    </main>
    
    <footer class="footer mt-auto py-3 border-top fixed-bottom bg-light">
      <div class="col-md-4 d-flex align-items-center px-3">
        <span class="mb-3 mb-md-0 text-muted">FH Campus Wien - Frontend Design, © Stefan Pfleger 2023 </span>
      </div>
  
      <div class="nav col-md-4 justify-content-end list-unstyled d-flex">
      </div>
    </footer>
  </div>
`
