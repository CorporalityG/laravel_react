<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel='shortcut icon' type='image/x-icon' href="{{ asset('images/favicon.png') }}" />

        <title>@yield('Title') ~ {{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
        <!-- Google Font: Source Sans Pro -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <!-- Font Awesome -->
        <link rel="stylesheet" href="{{ asset('public/plugins/fontawesome-free/css/all.min.css') }}">
        <!-- Ionicons -->
        <link rel="stylesheet" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        <!-- Tempusdominus Bootstrap 4 -->
        <link rel="stylesheet" href="{{ asset('public/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css') }}">
        <!-- Select2 -->
        <link rel="stylesheet" href="{{ asset('public/plugins/select2/css/select2.min.css') }}">
        <!-- iCheck -->
        <link rel="stylesheet" href="{{ asset('public/plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">
        
        <!-- DataTables -->
        <link rel="stylesheet" href="{{ asset('public/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css') }}">
        <link rel="stylesheet" href="{{ asset('public/plugins/datatables-responsive/css/responsive.bootstrap4.min.css') }}">
        <link rel="stylesheet" href="{{ asset('public/plugins/datatables-buttons/css/buttons.bootstrap4.min.css') }}">

        <!-- Theme style -->
        <link rel="stylesheet" href="{{ asset('css/adminlte.min.css') }}">
        <!-- overlayScrollbars -->
        <link rel="stylesheet" href="{{ asset('public/plugins/overlayScrollbars/css/OverlayScrollbars.min.css') }}">
        <!-- Daterange picker -->
        <link rel="stylesheet" href="{{ asset('public/plugins/daterangepicker/daterangepicker.css') }}">
        <!-- summernote -->
        <link rel="stylesheet" href="{{ asset('public/plugins/summernote/summernote-bs4.min.css') }}">

        <!-- Style -->
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}"></script>
    </head>
    <body class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">
            @include('layouts.navigation')

            <!-- Page Heading -->
            {{-- <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {{ $header }}
                </div>
            </header> --}}

            <!-- Page Content -->
            <main>
                <!-- Main Sidebar Container -->
                <aside class="main-sidebar sidebar-dark-primary elevation-4">
                  <!-- Brand Logo -->
                  <a href="{{ url('/') }}" class="brand-link">
                    <img src="{{ asset('images/logo.png') }}" alt="{{ __('Corporality Global') }}" class="brand-images">
                    {{--<span class="brand-text font-weight-light">{{ __('Corporality Global') }}</span>--}}
                  </a>

                  <!-- Sidebar -->
                  <div class="sidebar">
                    <!-- Sidebar Menu -->
                    <nav class="mt-3">
                      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-item">
                            <a href="{{ route('dashboard') }}" class="nav-link @if( request()->routeIs('dashboard') ) active @endif">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>{{ __('Dashboard') }}</p>
                            </a>
                        </li>

                        <div class="post"></div>

                        <!-- Post menu start -->
                        @php
                          $postMenuOpen = '';
                          $postMenuActive = '';

                          $postLinkActive = '';
                          $postCategoryActive = '';
                        @endphp

                        @if( request()->routeIs('posts.index') || request()->is('posts/*') || request()->routeIs('categories.index') || request()->is('categories/*') )
                          @php
                            $postMenuOpen = 'menu-open';
                            $postMenuActive = 'active';
                          @endphp
                        @endif

                        @if( request()->routeIs('posts.index') || request()->is('posts/*') )
                          @php
                            $postLinkActive = 'active';
                          @endphp
                        @endif

                        @if( request()->routeIs('categories.index') || request()->is('categories/*') )
                          @php
                            $postCategoryActive = 'active';
                          @endphp
                        @endif
                        <li class="nav-item {{ $postMenuOpen }}">
                          <a href="javarscript:;" class="nav-link {{ $postMenuActive }}">
                            <i class="nav-icon fas fa-edit"></i>
                            <p>
                              {{ __('Blogs') }}
                              <i class="right fas fa-angle-left"></i>
                            </p>
                          </a>
                          <ul class="nav nav-treeview">
                            <li class="nav-item">
                              <a href="{{ route('posts.index') }}" class="nav-link {{ $postLinkActive }}">
                                <i class="far fa-copy nav-icon"></i>
                                <p>{{ __('Blogs') }}</p>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="{{ route('categories.index') }}" class="nav-link {{ $postCategoryActive }}">
                                <i class="fas fa-th nav-icon"></i>
                                <p>{{ __('Categories') }}</p>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <!-- Post menu end -->
                        
                        <div class="post"></div>
                        
                        <!-- Article menu start -->
                        @php
                          $articleMenuOpen = '';
                          $articleMenuActive = '';

                          $articleLinkActive = '';
                          $articleCategoryActive = '';
                          $articleTagActive = '';
                        @endphp

                        @if( request()->routeIs('articles.index') || request()->is('articles/*') || request()->routeIs('article-categories.index') || request()->is('article-categories/*') )
                          @php
                            $articleMenuOpen = 'menu-open';
                            $articleMenuActive = 'active';
                          @endphp
                        @endif

                        @if( request()->routeIs('articles.index') || request()->is('articles/*') )
                          @php
                            $articleLinkActive = 'active';
                          @endphp
                        @endif

                        @if( request()->routeIs('article-categories.index') || request()->is('article-categories/*') )
                          @php
                            $articleCategoryActive = 'active';
                          @endphp
                        @endif

                        @if( request()->routeIs('article-tags.index') || request()->is('article-tags/*') )
                          @php
                            $articleTagActive = 'active';
                          @endphp
                        @endif
                        <li class="nav-item {{ $articleMenuOpen }}">
                          <a href="javarscript:;" class="nav-link {{ $articleMenuActive }}">
                            <i class="nav-icon fas fa-newspaper"></i>
                            <p>
                              {{ __('Service Insights') }}
                              <i class="right fas fa-angle-left"></i>
                            </p>
                          </a>
                          <ul class="nav nav-treeview">
                            <li class="nav-item">
                              <a href="{{ route('articles.index') }}" class="nav-link {{ $articleLinkActive }}">
                                <i class="far fa-copy nav-icon"></i>
                                <p>{{ __('Service Insights') }}</p>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="{{ route('article-categories.index') }}" class="nav-link {{ $articleCategoryActive }}">
                                <i class="fas fa-th nav-icon"></i>
                                <p>{{ __('Categories') }}</p>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <!-- Article menu end -->
                        
                        <div class="post"></div>

                        <!-- Article menu start -->
                        @php
                          $researchPaperLinkActive = '';
                        @endphp

                        @if( request()->routeIs('research-papers.index') || request()->is('research-papers/*') )
                          @php
                            $researchPaperLinkActive = 'active';
                          @endphp
                        @endif
                        <li class="nav-item">
                          <a href="{{ route('research-papers.index') }}" class="nav-link {{ $researchPaperLinkActive }}">
                            <i class="nav-icon fas fa-newspaper"></i>
                            <p>
                              {{ __('Research Papers') }}
                              <i class="right fas fa-angle-left"></i>
                            </p>
                          </a>
                        </li>
                        <!-- Article menu end -->
                        
                        <div class="post"></div>

                        <!-- csuit menu start -->
                        @php
                          $csuitMenuOpen = '';
                          $csuitMenuActive = '';

                          $csuitLinkActive = '';
                          $csuitCategoryActive = '';
                        @endphp

                        @if( request()->routeIs('csuit.index') || request()->is('csuit/*') || request()->routeIs('csuit-categories.index') || request()->is('csuit-categories/*') )
                          @php
                            $csuitMenuOpen = 'menu-open';
                            $csuitMenuActive = 'active';
                          @endphp
                        @endif

                        @if( request()->routeIs('csuit.index') || request()->is('csuit/*') )
                          @php
                            $csuitLinkActive = 'active';
                          @endphp
                        @endif

                        @if( request()->routeIs('csuit-categories.index') || request()->is('csuit-categories/*') )
                          @php
                            $csuitCategoryActive = 'active';
                          @endphp
                        @endif
                        <li class="nav-item {{ $csuitMenuOpen }}">
                          <a href="javarscript:;" class="nav-link {{ $csuitMenuActive }}">
                            <i class="nav-icon fas fa-edit"></i>
                            <p>
                              {{ __('CSuit') }}
                              <i class="right fas fa-angle-left"></i>
                            </p>
                          </a>
                          <ul class="nav nav-treeview">
                            <li class="nav-item">
                              <a href="{{ route('csuit.index') }}" class="nav-link {{ $csuitLinkActive }}">
                                <i class="far fa-copy nav-icon"></i>
                                <p>{{ __('CSuit') }}</p>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="{{ route('csuit-categories.index') }}" class="nav-link {{ $csuitCategoryActive }}">
                                <i class="fas fa-th nav-icon"></i>
                                <p>{{ __('Categories') }}</p>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <!-- csuit menu end -->
                        
                        <div class="post"></div>

                        <!-- Industrial Article menu start -->
                        @php
                          $industrialArticleMenuOpen = '';
                          $industrialArticleMenuActive = '';

                          $industrialArticleLinkActive = '';
                          $industrialArticleCategoryActive = '';
                        @endphp

                        @if( request()->routeIs('industrial-articles.index') || request()->is('industrial-articles/*') || request()->routeIs('industrial-article-categories.index') || request()->is('industrial-article-categories/*') )
                          @php
                            $industrialArticleMenuOpen = 'menu-open';
                            $industrialArticleMenuActive = 'active';
                          @endphp
                        @endif

                        @if( request()->routeIs('industrial-articles.index') || request()->is('industrial-articles/*') )
                          @php
                            $industrialArticleLinkActive = 'active';
                          @endphp
                        @endif

                        @if( request()->routeIs('industrial-article-categories.index') || request()->is('industrial-article-categories/*') )
                          @php
                            $industrialArticleCategoryActive = 'active';
                          @endphp
                        @endif
                        <li class="nav-item {{ $industrialArticleMenuOpen }}">
                          <a href="javarscript:;" class="nav-link {{ $industrialArticleMenuActive }}">
                            <i class="nav-icon fas fa-newspaper"></i>
                            <p>
                              {{ __('Industrial Articles') }}
                              <i class="right fas fa-angle-left"></i>
                            </p>
                          </a>
                          <ul class="nav nav-treeview">
                            <li class="nav-item">
                              <a href="{{ route('industrial-articles.index') }}" class="nav-link {{ $industrialArticleLinkActive }}">
                                <i class="far fa-copy nav-icon"></i>
                                <p>{{ __('Industrial Articles') }}</p>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="{{ route('industrial-article-categories.index') }}" class="nav-link {{ $industrialArticleCategoryActive }}">
                                <i class="fas fa-th nav-icon"></i>
                                <p>{{ __('Categories') }}</p>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <!-- Industrial Article menu end -->
                        
                        <div class="post"></div>

                        <!-- pages menu start -->
                        @php
                          $pageLinkActive = '';
                        @endphp

                        @if( request()->routeIs('pages.index') || request()->is('pages/*') )
                          @php
                            $pageLinkActive = 'active';
                          @endphp
                        @endif
                        <li class="nav-item">
                          <a href="{{ route('pages.index') }}" class="nav-link {{ $pageLinkActive }}">
                            <i class="nav-icon fas fa-file"></i>
                            <p>
                              {{ __('Pages') }}
                              <i class="right fas fa-angle-left"></i>
                            </p>
                          </a>
                        </li>
                        <!-- pages menu end -->

                        <div class="post"></div>

                        <!-- jobs menu start -->
                        @php
                          $jobLinkActive = '';
                        @endphp

                        @if( request()->routeIs('jobs.index') || request()->is('jobs/*') )
                          @php
                            $jobLinkActive = 'active';
                          @endphp
                        @endif
                        <li class="nav-item">
                          <a href="{{ route('jobs.index') }}" class="nav-link {{ $jobLinkActive }}">
                            <i class="nav-icon fas fa-graduation-cap"></i>
                            <p>
                              {{ __('Jobs') }}
                              <i class="right fas fa-angle-left"></i>
                            </p>
                          </a>
                        </li>
                        <!-- jobs menu end -->

                        <div class="post"></div>

                        <!-- testimonials menu start -->
                        @php
                          $testimonialLinkActive = '';
                        @endphp

                        @if( request()->routeIs('testimonials.index') || request()->is('testimonials/*') )
                          @php
                            $testimonialLinkActive = 'active';
                          @endphp
                        @endif
                        <li class="nav-item">
                          <a href="{{ route('testimonials.index') }}" class="nav-link {{ $testimonialLinkActive }}">
                            <i class="nav-icon fas fa-quote-left"></i>
                            <p>
                              {{ __('Testimonial') }}
                              <i class="right fas fa-angle-left"></i>
                            </p>
                          </a>
                        </li>
                        <!-- testimonials menu end -->

                        <div class="post"></div>

                        <!-- team-members menu start -->
                        @php
                          $TeamMemberLinkActive = '';
                        @endphp

                        @if( request()->routeIs('team-members.index') || request()->is('team-members/*') )
                          @php
                            $TeamMemberLinkActive = 'active';
                          @endphp
                        @endif
                        <li class="nav-item">
                          <a href="{{ route('team-members.index') }}" class="nav-link {{ $TeamMemberLinkActive }}">
                            <i class="nav-icon fas fa-users"></i>
                            <p>
                              {{ __('Team Member') }}
                              <i class="right fas fa-angle-left"></i>
                            </p>
                          </a>
                        </li>
                        <!-- team-members menu end -->

                        <div class="post"></div>

                        <li class="nav-item">
                          <!-- Authentication -->
                          <form method="POST" action="{{ route('logout') }}">
                              @csrf

                              <x-dropdown-link :href="route('logout')"
                                      onclick="event.preventDefault();
                                                  this.closest('form').submit();" class="nav-link"><i class="nav-icon far fa-circle text-danger"></i><p>{{ __('Log Out') }}</p>
                              </x-dropdown-link>
                          </form>
                        </li>

                        <div class="post"></div>

                        <li class="nav-item">&nbsp;</li>
                        <div class="post"></div>
                      </ul>
                    </nav>
                    <!-- /.sidebar-menu -->
                  </div>
                  <!-- /.sidebar -->
                </aside>

                <!-- Content Wrapper. Contains page content -->
                <div class="content-wrapper">
                    <!-- Content Header (Page header) -->
                    <div class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1 class="m-0">@yield('Title')</h1>
                                </div><!-- /.col -->
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{ __('Dashboard') }}</a></li>
                                        <li class="breadcrumb-item active">@yield('Title')</li>
                                    </ol>
                                </div><!-- /.col -->
                            </div><!-- /.row -->
                        </div><!-- /.container-fluid -->
                    </div>
                    <!-- /.content-header -->

                    <!-- Main content -->
                    <section class="content">
                      <div class="container-fluid">
                        @yield('content')
                      </div>
                    </section>
                    <!-- /.content -->
                </div>
                <!-- /.content-wrapper -->

                <!-- /.content-wrapper -->
                <footer class="main-footer text-center">
                  <strong>Copyright &copy; @php echo date('Y'); @endphp <a href="{{ url('/') }}">{{ config('app.name', 'Laravel') }}</a>.</strong> All rights reserved.
                </footer>
            </main>
        </div>

    <!-- jQuery -->
    <script src="{{ asset('public/plugins/jquery/jquery.min.js') }}"></script>
    <!-- jQuery UI 1.11.4 -->
    <script src="{{ asset('public/plugins/jquery-ui/jquery-ui.min.js') }}"></script>
    <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
    <script>
      $.widget.bridge('uibutton', $.ui.button)
    </script>
    <!-- Bootstrap 4 -->
    <script src="{{ asset('public/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>

    <!-- Select2 -->
    <script src="{{ asset('public/plugins/select2/js/select2.full.min.js') }}"></script>

    <!-- DataTables  & Plugins -->
    <script src="{{ asset('public/plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('public/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('public/plugins/datatables-responsive/js/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('public/plugins/datatables-responsive/js/responsive.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('public/plugins/datatables-buttons/js/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('public/plugins/datatables-buttons/js/buttons.bootstrap4.min.js') }}"></script>

    <!-- bs-custom-file-input -->
    <script src="{{ asset('public/plugins/bs-custom-file-input/bs-custom-file-input.min.js') }}"></script>
    
    <!-- Sparkline -->
    <script src="{{ asset('public/plugins/sparklines/sparkline.js') }}"></script>
    
    <!-- jQuery Knob Chart -->
    <script src="{{ asset('public/plugins/jquery-knob/jquery.knob.min.js') }}"></script>
    <!-- daterangepicker -->
    <script src="{{ asset('public/plugins/moment/moment.min.js') }}"></script>
    <script src="{{ asset('public/plugins/daterangepicker/daterangepicker.js') }}"></script>
    <!-- Tempusdominus Bootstrap 4 -->
    <script src="{{ asset('public/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js') }}"></script>
    <!-- Summernote -->
    <script src="{{ asset('public/plugins/summernote/summernote-bs4.min.js') }}"></script>
    <!-- overlayScrollbars -->
    <script src="{{ asset('public/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js') }}"></script>
    <!-- AdminLTE App -->
    <script src="{{ asset('js/adminlte.js') }}"></script>

    <!-- Summernote -->
    <script src="{{ asset('public/plugins/summernote/summernote-bs4.min.js') }}"></script>

    <script>
    $(function () {
      bsCustomFileInput.init();
    });
    </script>
    </body>
</html>
