import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // $(function () {
  //   $(".menu-link").click(function () {
  //    $(".menu-link").removeClass("is-active");
  //    $(this).addClass("is-active");
  //   });
  //  });

  //  $(function () {
  //   $(".main-header-link").click(function () {
  //    $(".main-header-link").removeClass("is-active");
  //    $(this).addClass("is-active");
  //   });
  //  });

  //  const dropdowns = document.querySelectorAll(".dropdown");
  //  dropdowns.forEach((dropdown) => {
  //   dropdown.addEventListener("click", (e) => {
  //    e.stopPropagation();
  //    dropdowns.forEach((c) => c.classList.remove("is-active"));
  //    dropdown.classList.add("is-active");
  //   });
  //  });

  //  $(".search-bar input")
  //   .focus(function () {
  //    $(".header").addClass("wide");
  //   })
  //   .blur(function () {
  //    $(".header").removeClass("wide");
  //   });

  //  $(document).click(function (e) {
  //   var container = $(".status-button");
  //   var dd = $(".dropdown");
  //   if (!container.is(e.target) && container.has(e.target).length === 0) {
  //    dd.removeClass("is-active");
  //   }
  //  });

  //  $(function () {
  //   $(".dropdown").on("click", function (e) {
  //    $(".content-wrapper").addClass("overlay");
  //    e.stopPropagation();
  //   });
  //   $(document).on("click", function (e) {
  //    if ($(e.target).is(".dropdown") === false) {
  //     $(".content-wrapper").removeClass("overlay");
  //    }
  //   });
  //  });

  //  $(function () {
  //   $(".status-button:not(.open)").on("click", function (e) {
  //    $(".overlay-app").addClass("is-active");
  //   });
  //   $(".pop-up .close").click(function () {
  //    $(".overlay-app").removeClass("is-active");
  //   });
  //  });

  //  $(".status-button:not(.open)").click(function () {
  //   $(".pop-up").addClass("visible");
  //  });

  //  $(".pop-up .close").click(function () {
  //   $(".pop-up").removeClass("visible");
  //  });

  //  const toggleButton = document.querySelector('.dark-light');

  //  toggleButton.addEventListener('click', () => {
  //    document.body.classList.toggle('light-mode');
  //  });

  /* menuLinkActive: boolean = false;
  mainHeaderLinkActive: boolean = false;
  dropdownActive: boolean = false;
  contentWrapperOverlay: boolean = false;
  popUpVisible: boolean = false;

  handleMenuLinkClick(event: Event): void {
    // Handle menu-link click
    this.menuLinkActive = true;
    this.mainHeaderLinkActive = false;
  }

  handleMainHeaderLinkClick(event: Event): void {
    // Handle main-header-link click
    this.menuLinkActive = false;
    this.mainHeaderLinkActive = true;
  }

  handleDropdownClick(event: Event): void {
    // Handle dropdown click
    event.stopPropagation();
    this.dropdownActive = !this.dropdownActive;
  }

  handleSearchInputFocus(): void {
    // Handle search input focus
    // Add your logic here, e.g., this.headerWide = true;
  }

  handleSearchInputBlur(): void {
    // Handle search input blur
    // Add your logic here, e.g., this.headerWide = false;
  }

  handleStatusButtonClick(event: Event): void {
    // Handle status-button click
    // Add your logic here, e.g., this.overlayAppActive = true;
  }

  handlePopUpCloseClick(): void {
    // Handle pop-up close click
    // Add your logic here, e.g., this.overlayAppActive = false;
    this.popUpVisible = false;
  }

  handleToggleButton(): void {
    // Handle toggleButton click
    document.body.classList.toggle('light-mode');
  } */

}
