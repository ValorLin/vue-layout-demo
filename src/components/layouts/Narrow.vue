<template>
  <div class="narrow-layout container">
    <header class="header clearfix">
      <nav>
        <ul class="nav nav-pills float-right">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <h3 class="text-muted">Project name</h3>
    </header>

    <slot></slot>

    <footer class="footer">
      <p>&copy; Company 2017</p>
    </footer>

  </div> <!-- /container -->
</template>

<script>
  export default {
    name: 'empty-layout'
  }
</script>

<style lang="scss">
  .narrow-layout {
    /* Space out content a bit */
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    /* Everything but the jumbotron gets side spacing for mobile first views */
    .header,
    .marketing,
    .footer {
      padding-right: 1rem;
      padding-left: 1rem;
    }

    /* Custom page header */
    .header {
      padding-bottom: 1rem;
      border-bottom: .05rem solid #e5e5e5;
    }

    /* Make the masthead heading the same height as the navigation */
    .header h3 {
      margin-top: 0;
      margin-bottom: 0;
      line-height: 3rem;
    }

    /* Custom page footer */
    .footer {
      padding-top: 1.5rem;
      color: #777;
      border-top: .05rem solid #e5e5e5;
    }

    /* Customize container */
    @media (min-width: 48em) {
      .container {
        max-width: 46rem;
      }
    }
    .container-narrow > hr {
      margin: 2rem 0;
    }

    /* Main marketing message and sign up button */
    .jumbotron {
      text-align: center;
      border-bottom: .05rem solid #e5e5e5;
    }
    .jumbotron .btn {
      padding: .75rem 1.5rem;
      font-size: 1.5rem;
    }

    /* Supporting marketing content */
    .marketing {
      margin: 3rem 0;
    }
    .marketing p + h4 {
      margin-top: 1.5rem;
    }

    /* Responsive: Portrait tablets and up */
    @media screen and (min-width: 48em) {
      /* Remove the padding we set earlier */
      .header,
      .marketing,
      .footer {
        padding-right: 0;
        padding-left: 0;
      }

      /* Space out the masthead */
      .header {
        margin-bottom: 2rem;
      }

      /* Remove the bottom border on the jumbotron for visual effect */
      .jumbotron {
        border-bottom: 0;
      }
    }
  }
</style>