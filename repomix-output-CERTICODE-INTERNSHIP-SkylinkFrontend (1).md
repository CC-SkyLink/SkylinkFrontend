This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.github/
  workflows/
    main.yml
public/
  Images/
    BookPage/
      Bali.png
      Book Page (2).png
      Cebu.png
      Davao.png
      Discover Bali from 6200.png
      Explore Page.png
      Flash Sale Manila-Cebu.png
      Fly to Singapore P7500.png
      HongKong.png
      Kalibo Boracay.png
      Promos Page.png
      Puerto Princesa.png
      Singapore.png
      Tokyo.png
      Weekend Escape Manila - Palawan.png
      WhereDoYouWantToFLySection.png
  favicon.svg
  icons.svg
  Log-in-1.png
  Log-in.png
src/
  api/
    api.helpers.ts
    auth.api.ts
    axiosClient.ts
    bookings.api.ts
    destinations.api.ts
    flights.api.ts
    payments.api.ts
    pnr.api.ts
    promotions.api.ts
    reports.api.ts
    users.api.ts
  assets/
    BackgroundImages/
      homepagePlane.png
      london.png
      paris.png
      sydney.png
      tokyo.png
    logos/
      Logo 1.png
      Logo 2.png
      Logos-1.png
      Logos.png
      SkyLink.png
      Vector.png
    SocialMediaIcons/
      Icon-1.png
      Icon-2.png
      Icon-3.png
      Icon.png
    hero.png
    react.svg
    vite.svg
  constants/
    routes.ts
    theme.ts
  hooks/
    useAsyncValue.ts
    useAuth.ts
    useBookings.ts
    useFlights.ts
    usePaymentFlow.ts
    usePNRStatus.ts
    useReports.ts
  pages/
    _shared/
      components/
        booking/
          BookingSummary.tsx
          PassengerForm.tsx
          PaymentForm.tsx
        flights/
          FlightCard.tsx
          FlightSearchForm.tsx
        layout/
          AdminRoute.tsx
          Footer.tsx
          Navbar.tsx
          ProtectedRoute.tsx
          PublicOnlyRoute.tsx
        ui/
          Button.tsx
          DataTable.tsx
          DatePicker.tsx
          EmptyState.tsx
          ErrorState.tsx
          FilterBar.tsx
          Input.tsx
          Modal.tsx
          ScreenPlaceholder.tsx
          Skeleton.tsx
          StatusBadge.tsx
          Stepper.tsx
          Toast.tsx
    admin/
      _components/
        AdminLayout.tsx
        AdminSidebar.tsx
        AdminTopHeader.tsx
        DashboardCharts.tsx
        KPICard.tsx
        SystemAlerts.tsx
      AdminAddFlightPage.tsx
      AdminDashboardPage.tsx
      AdminDestinationsPage.tsx
      AdminEditFlightPage.tsx
      AdminFlightsPage.tsx
      AdminPromotionsPage.tsx
      AdminReportsPage.tsx
      AdminUserDetailPage.tsx
      AdminUsersPage.tsx
    BookingPagesFolder/
      BookingConfirmationPage/
        BookingConfirmationPage.tsx
      BookingSummaryPage/
        BookingSummaryPage.tsx
      components/
        BookingStepper.tsx
      PassengerDetailsPage/
        PassengerDetailsPage.tsx
      PaymentPage/
        PaymentPage.tsx
      PaymentProcessingPage/
        PaymentProcessingPage.tsx
      SeatSelectionPage/
        SeatSelectionPage.tsx
      bookingData.ts
    BookingResultPagesFolder/
      ResultsBookingPage/
        components/
          AuthGateModal.tsx
          FareRulesCard.tsx
          FlightDetailCard.tsx
          PriceSummaryCard.tsx
        ResultsBookingPage.tsx
      SearchResultsPage/
        components/
          FiltersPanel.tsx
          FlightResultCard.tsx
        SearchResultsPage.tsx
    ExplorePagesFolder/
      DeaPage/
        DeaPage.tsx
      DestinationPage/
        DestinationPage.tsx
      PromosPage/
        PromosPage.tsx
    HomePage/
      HomePage.tsx
    MainPagesFolder/
      BookingLandingPage/
        components/
          PassengerSelector.tsx
          TripTypePill.tsx
        BookingLandingPage.tsx
      ExplorePage/
        ExplorePage.tsx
      FlightStatusPage/
        FlightStatusPage.tsx
      ManagePage/
        components/
          BookingCard.tsx
        ManagePage.tsx
    ManageBookingPagesFolder/
      components/
        ManageBookingDetailsLayout.tsx
      ManageBookingCanceledPage/
        ManageBookingCanceledPage.tsx
      ManageBookingCancelPage/
        ManageBookingCancelPage.tsx
      ManageBookingDetailsPage/
        ManageBookingDetailsPage.tsx
      ManageBookingsPage/
        ManageBookingsPage.tsx
      manageBookingData.ts
    SearchResultsPage/
      index.ts
      searchResults.utils.ts
      SearchResultsPage.tsx
    BookingDetailPage.tsx
    BookingPage.tsx
    LoginPage.tsx
    MyBookingsPage.tsx
    PaymentPage.tsx
    RegisterPage.tsx
  store/
    authContext.ts
    authStore.tsx
    bookingFlowContext.ts
    bookingFlowStore.tsx
    paymentFlowContext.ts
    paymentFlowStore.tsx
    useAuthStore.ts
    useBookingFlowStore.ts
    usePaymentFlowStore.ts
  styles/
    index.css
    tokens.css
  types/
    api.types.ts
    booking.types.ts
    destinations.types.ts
    flight.types.ts
    index.ts
    payment.types.ts
    pnr.types.ts
    promotion.types.ts
    report.types.ts
    user.types.ts
  utils/
    cn.ts
    formatDate.ts
    token.ts
  validation/
    auth.schemas.ts
    booking.schemas.ts
    common.schemas.ts
    flight.schemas.ts
    index.ts
    payment.schemas.ts
    pnr.schemas.ts
    promotion.schemas.ts
  App.tsx
  main.tsx
  vite-env.d.ts
.env.example
.gitignore
eslint.config.js
index.html
InitialWireframes.txt
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

# Files

## File: .github/workflows/main.yml
````yaml
name: CI for Pull Request

on:
  pull_request:
    branches: [ "main", "master" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'

    - name: Install dependencies
      run: npm install

    - name: Build project
      run: npm run build --if-present

    - name: Run tests
      run: npm test --if-present
````

## File: public/favicon.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
````

## File: public/icons.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
````

## File: src/api/api.helpers.ts
````typescript
import axios from "axios";
import type { APIError } from "@/types";

interface AxiosErrorPayload {
  message?: string;
  [key: string]: unknown;
}

export function handleApiError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    const responsePayload = error.response?.data as AxiosErrorPayload | undefined;
    const message =
      responsePayload?.message || error.message || "API Error";
    const status = error.response?.status;
    const details = error.response?.data;
    throw { message, status, details } as APIError;
  }

  throw { message: "Unknown API error", details: error } as APIError;
}
````

## File: src/api/auth.api.ts
````typescript
import axiosClient from "./axiosClient";
import { handleApiError } from "./api.helpers";
import type { User } from "@/types";
import type {
  LoginFormValues,
  RegisterFormValues,
  ForgotPasswordFormValues,
  ResetPasswordFormValues,
} from "@/validation/auth.schemas";
import type { TokenResponse, MessageResponse } from "@/types/api.types";

export async function login(credentials: LoginFormValues): Promise<TokenResponse> {
  try {
    const res = await axiosClient.post<TokenResponse>("/auth/login", credentials);
    return res.data;
  } catch (err) {
    handleApiError(err);
    throw err;
  }
}

export async function register(payload: Omit<RegisterFormValues, "confirmPassword">): Promise<User> {
  try {
    const res = await axiosClient.post<User>("/auth/register", payload);
    return res.data;
  } catch (err) {
    handleApiError(err);
    throw err;
  }
}

/**
 * Special registration for Admins
 * POST /auth/admin/register
 */
export async function registerAdmin(payload: Omit<RegisterFormValues, "confirmPassword">): Promise<User> {
  try {
    const res = await axiosClient.post<User>("/auth/admin/register", payload);
    return res.data;
  } catch (err) {
    handleApiError(err);
    throw err;
  }
}

/**
 * Get current user profile
 * GET /users/me (As per API spec)
 */
export async function getProfile(): Promise<User> {
  try {
    const res = await axiosClient.get<User>("/users/me");
    return res.data;
  } catch (err) {
    handleApiError(err);
    throw err;
  }
}

/**
 * Update current user profile
 * PUT /users/me
 */
export async function updateProfile(payload: Partial<User>): Promise<User> {
  try {
    const res = await axiosClient.put<User>("/users/me", payload);
    return res.data;
  } catch (err) {
    handleApiError(err);
    throw err;
  }
}

export async function forgotPassword(payload: ForgotPasswordFormValues): Promise<MessageResponse> {
  try {
    const res = await axiosClient.post<MessageResponse>("/auth/forgot-password", payload);
    return res.data;
  } catch (err) {
    handleApiError(err);
    throw err;
  }
}

export async function resetPassword(payload: Omit<ResetPasswordFormValues, "confirmPassword">): Promise<MessageResponse> {
  try {
    const res = await axiosClient.post<MessageResponse>("/auth/reset-password", payload);
    return res.data;
  } catch (err) {
    handleApiError(err);
    throw err;
  }
}

export async function resendVerification(email: string): Promise<MessageResponse> {
  try {
    const res = await axiosClient.post<MessageResponse>("/auth/resend-verification", { email });
    return res.data;
  } catch (err) {
    handleApiError(err);
    throw err;
  }
}
````

## File: src/api/axiosClient.ts
````typescript
import axios from "axios";
import { isTokenExpired } from "@/utils/token";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    if (isTokenExpired(token)) {
      localStorage.removeItem("token");
      window.location.href = "/login";
      return Promise.reject(new Error("Session expired. Please log in again."));
    }
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
````

## File: src/api/bookings.api.ts
````typescript
import axiosClient from "./axiosClient";
import { handleApiError } from "./api.helpers";
import type {
  Booking,
  BookingDetail,
  RescheduleRequest,
} from "@/types";

/**
 * User/Admin: Create Booking
 * POST /api/v1/bookings
 */
export async function createBooking(
  payload: Partial<Booking>,
): Promise<Booking> {
  try {
    const res = await axiosClient.post("/bookings", payload);
    return res.data as Booking;
  } catch (err) {
    handleApiError(err);
  }
}

/**
 * User: Get own bookings
 * GET /api/v1/bookings
 */
export async function getBookingsForUser(userId?: string): Promise<Booking[]> {
  try {
    const res = await axiosClient.get("/bookings", {
      params: userId ? { userId } : {},
    });
    // Handle PaginatedResponse[BookingListRead]
    const items = Array.isArray(res.data) ? res.data : (res.data?.items || []);
    return items as Booking[];
  } catch (err) {
    handleApiError(err);
  }
}

/**
 * Admin: Get ALL bookings
 * GET /api/v1/bookings/admin/all
 */
export async function getAllBookingsAdmin(): Promise<Booking[]> {
  try {
    const res = await axiosClient.get("/bookings/admin/all");
    // Handle PaginatedResponse[BookingListRead]
    const items = Array.isArray(res.data) ? res.data : (res.data?.items || []);
    return items as Booking[];
  } catch (err) {
    handleApiError(err);
  }
}

/**
 * User/Admin: Get specific booking
 * GET /api/v1/bookings/{booking_id}
 */
export async function getBookingDetail(id: string): Promise<BookingDetail> {
  try {
    const res = await axiosClient.get(`/bookings/${id}`);
    return res.data as BookingDetail;
  } catch (err) {
    handleApiError(err);
  }
}

/**
 * User/Admin: Cancel Booking
 * DELETE /api/v1/bookings/{booking_id}
 */
export async function cancelBooking(
  id: string,
): Promise<void> {
  try {
    await axiosClient.delete(`/bookings/${id}`);
  } catch (err) {
    handleApiError(err);
  }
}

/**
 * User/Admin: Reschedule Booking
 * PUT /api/v1/bookings/{booking_id}/reschedule
 */
export async function rescheduleBooking(
  id: string,
  payload: RescheduleRequest,
): Promise<Booking> {
  try {
    const res = await axiosClient.put(`/bookings/${id}/reschedule`, payload);
    return res.data as Booking;
  } catch (err) {
    handleApiError(err);
  }
}

/**
 * Admin: Preview Cancellation (Stub if not in OAS)
 */
export async function previewCancellation(id: string): Promise<any> {
  try {
    // If backend doesn't have this, we return a mock or handle it in UI
    const res = await axiosClient.get(`/bookings/${id}/cancel-preview`);
    return res.data;
  } catch (err) {
    // Fallback if endpoint doesn't exist
    return { refund_amount: 0 };
  }
}
````

## File: src/api/destinations.api.ts
````typescript
import axiosClient from "./axiosClient";
import type {
  Airport, Aircraft, SeatClass, Seat,
  CreateAirportPayload, UpdateAirportPayload,
  CreateAircraftPayload, UpdateAircraftPayload,
  CreateSeatClassPayload, UpdateSeatClassPayload,
  CreateSeatPayload,
} from "@/types/destinations.types";

const AIRPORTS = "/admin/airports";
const AIRCRAFT = "/admin/aircraft";
const SEAT_CLASSES = "/admin/seat-classes";

// ── Airports ──────────────────────────────────────────────────────────────────
export const getAirports = async (): Promise<Airport[]> => {
  const response = await axiosClient.get(AIRPORTS);
  return response.data;
};

export const createAirport = async (payload: CreateAirportPayload): Promise<Airport> => {
  const response = await axiosClient.post(AIRPORTS, payload);
  return response.data;
};

export const updateAirport = async (id: number, payload: UpdateAirportPayload): Promise<Airport> => {
  const response = await axiosClient.put(`${AIRPORTS}/${id}`, payload);
  return response.data;
};

export const deleteAirport = async (id: number): Promise<void> => {
  await axiosClient.delete(`${AIRPORTS}/${id}`);
};

// ── Aircraft ──────────────────────────────────────────────────────────────────
export const getAircraft = async (): Promise<Aircraft[]> => {
  const response = await axiosClient.get(AIRCRAFT);
  return response.data;
};

export const createAircraft = async (payload: CreateAircraftPayload): Promise<Aircraft> => {
  const response = await axiosClient.post(AIRCRAFT, payload);
  return response.data;
};

export const updateAircraft = async (id: number, payload: UpdateAircraftPayload): Promise<Aircraft> => {
  const response = await axiosClient.put(`${AIRCRAFT}/${id}`, payload);
  return response.data;
};

export const deleteAircraft = async (id: number): Promise<void> => {
  await axiosClient.delete(`${AIRCRAFT}/${id}`);
};

// ── Seat Management ──────────────────────────────────────────────────────────
export const getAircraftSeats = async (aircraftId: number): Promise<Seat[]> => {
  const response = await axiosClient.get(`${AIRCRAFT}/${aircraftId}/seats`);
  return response.data;
};

export const addAircraftSeats = async (aircraftId: number, payload: CreateSeatPayload[]): Promise<Seat[]> => {
  const response = await axiosClient.post(`${AIRCRAFT}/${aircraftId}/seats`, payload);
  return response.data;
};

export const deleteAircraftSeat = async (seatId: number): Promise<void> => {
  await axiosClient.delete(`${AIRCRAFT}/seats/${seatId}`);
};

// ── Seat Classes ──────────────────────────────────────────────────────────────
export const getSeatClasses = async (): Promise<SeatClass[]> => {
  const response = await axiosClient.get(SEAT_CLASSES);
  return response.data;
};

export const createSeatClass = async (payload: CreateSeatClassPayload): Promise<SeatClass> => {
  const response = await axiosClient.post(SEAT_CLASSES, payload);
  return response.data;
};

export const updateSeatClass = async (id: number, payload: UpdateSeatClassPayload): Promise<SeatClass> => {
  const response = await axiosClient.put(`${SEAT_CLASSES}/${id}`, payload);
  return response.data;
};

export const deleteSeatClass = async (id: number): Promise<void> => {
  await axiosClient.delete(`${SEAT_CLASSES}/${id}`);
};
````

## File: src/api/flights.api.ts
````typescript
import axiosClient from "./axiosClient";
import { handleApiError } from "./api.helpers";
import type { Flight, FlightSearchParams } from "@/types";

// Helper to map backend data to frontend Flight type
const mapBackendFlight = (f: any): Flight => {
  // Extract price from seat_pricing if available, looking for economy or just taking the first available price
  let extractedPrice = 0;
  if (f.seat_pricing && f.seat_pricing.length > 0) {
    const economyPricing = f.seat_pricing.find((p: any) => 
      p.seat_class?.name?.toLowerCase() === "economy" || p.seat_class_id === 1
    );
    // Use price from economyPricing if found, otherwise take from the first element
    extractedPrice = (economyPricing?.price || f.seat_pricing[0].price) / 100;
  }

  return {
    id: f.id,
    flightNumber: f.flight_number,
    origin: f.origin_airport?.iata_code || f.origin,
    destination: f.destination_airport?.iata_code || f.destination,
    originCity: f.origin_airport?.city || f.origin_airport?.name || null,       
    originCountry: f.origin_airport?.country || null,                           
    destinationCity: f.destination_airport?.city || f.destination_airport?.name || null,  
    destinationCountry: f.destination_airport?.country || null,                  
    departureTime: f.departure_time,
    arrivalTime: f.arrival_time,
    status: f.status,
    price: extractedPrice || f.price || f.base_price || 0,
    seatsAvailable: f.seat_pricing?.reduce((acc: number, p: any) => acc + (p.available_seats || 0), 0) || f.seatsAvailable,
    totalSeats: f.seat_pricing?.reduce((acc: number, p: any) => acc + (p.total_seats || 0), 0) || f.totalSeats,
    airline: f.airline || "SkyLink",
    cabinClass: f.cabin_class || "economy",
    imageUrl: f.image_url || "",
  };
};

// Helper to map frontend data to backend payload
const mapFrontendToBackend = (payload: any) => {
  const AIRPORT_MAP: Record<string, number> = { MNL: 1, CEB: 2, DVO: 3, ILO: 4, BCD: 5 };
  
  const mapped = {
    flight_number: payload.flightNumber,
    origin_airport_id: AIRPORT_MAP[payload.origin?.toUpperCase() || ""] || 1,
    destination_airport_id: AIRPORT_MAP[payload.destination?.toUpperCase() || ""] || 2,
    departure_time: payload.departureTime,
    arrival_time: payload.arrivalTime,
    status: payload.status,
    airline: payload.airline,
    aircraft_id: payload.aircraftId,
    image_url: payload.imageUrl,
    seat_pricing: payload.seat_pricing.map((p: any) => ({
      seat_class_id: p.seat_class_id,
      price: Math.round(Number(p.price) * 100) // Price is in cents in backend
    }))
  };

  console.log("Sending to backend:", mapped);
  return mapped;
};

export async function searchFlights(
  params: FlightSearchParams = {},
): Promise<Flight[]> {
  try {
    const res = await axiosClient.get("/flights", { params });
    const items = Array.isArray(res.data) ? res.data : (res.data?.items || []);
    return items.map(mapBackendFlight);
  } catch (err) {
    handleApiError(err);
    return []; 
  }
}

export async function getFlightById(id: string): Promise<Flight | null> { 
  try {
    const res = await axiosClient.get(`/flights/${id}`);
    return mapBackendFlight(res.data);
  } catch (err) {
    handleApiError(err);
    return null;
  }
}

export async function createFlight(payload: Partial<Flight>): Promise<Flight | null> { 
  try {
    const backendPayload = mapFrontendToBackend(payload);
    const res = await axiosClient.post("/flights", backendPayload);
    return mapBackendFlight(res.data);
  } catch (err) {
    handleApiError(err);
    return null;
  }
}

export async function updateFlight(
  id: string,
  payload: Partial<Flight>,
): Promise<Flight | null> { 
  try {
    const backendPayload = mapFrontendToBackend(payload);
    const res = await axiosClient.put(`/flights/${id}`, backendPayload);
    return mapBackendFlight(res.data);
  } catch (err) {
    handleApiError(err);
    return null;
  }
}

export async function deleteFlight(id: string): Promise<void> {
  try {
    await axiosClient.delete(`/flights/${id}`);
  } catch (err) { 
    handleApiError(err);
  }
}
````

## File: src/api/payments.api.ts
````typescript
import axiosClient from "./axiosClient";
import { handleApiError } from "./api.helpers";
import type {
  OTPChallenge,
  Payment,
  PaymentFailure,
  PaymentRequest,
} from "@/types";

export async function initializePayment(
  payload: PaymentRequest,
): Promise<Payment> {
  try {
    const res = await axiosClient.post("/payments/initialize", payload);
    return res.data as Payment;
  } catch (err) {
    handleApiError(err);
  }
}

export async function requestPaymentOtp(
  paymentId: string,
): Promise<OTPChallenge> {
  try {
    const res = await axiosClient.post(`/payments/${paymentId}/otp/request`);
    return res.data as OTPChallenge;
  } catch (err) {
    handleApiError(err);
  }
}

export async function verifyPaymentOtp(
  paymentId: string,
  otpCode: string,
): Promise<Payment> {
  try {
    const res = await axiosClient.post(`/payments/${paymentId}/otp/verify`, {
      otpCode,
    });
    return res.data as Payment;
  } catch (err) {
    handleApiError(err);
  }
}

export async function getPaymentStatus(paymentId: string): Promise<Payment> {
  try {
    const res = await axiosClient.get(`/payments/${paymentId}`);
    return res.data as Payment;
  } catch (err) {
    handleApiError(err);
  }
}

export async function getPaymentFailure(
  paymentId: string,
): Promise<PaymentFailure | null> {
  try {
    const res = await axiosClient.get(`/payments/${paymentId}/failure`);
    return res.data as PaymentFailure | null;
  } catch (err) {
    handleApiError(err);
  }
}
````

## File: src/api/pnr.api.ts
````typescript
import axiosClient from "./axiosClient";
import { handleApiError } from "./api.helpers";
import type { PNRStatusResult } from "@/types";

export async function getPNRStatus(pnr: string): Promise<PNRStatusResult> {
  try {
    const res = await axiosClient.get("/pnr/status", {
      params: { pnr: pnr.toUpperCase() },
    });
    return res.data as PNRStatusResult;
  } catch (err) {
    handleApiError(err);
  }
}

export async function lookupPublicPNRStatus(
  pnr: string,
  lastName: string,
): Promise<PNRStatusResult> {
  try {
    const res = await axiosClient.get("/pnr/public-status", {
      params: {
        pnr: pnr.toUpperCase(),
        lastName,
      },
    });
    return res.data as PNRStatusResult;
  } catch (err) {
    handleApiError(err);
  }
}
````

## File: src/api/promotions.api.ts
````typescript
import axiosClient from "./axiosClient";
import type { Promotion, CreatePromotionPayload } from "@/types/promotion.types";

const BASE_PATH = "/promotions";

export const getPromotions = async (): Promise<Promotion[]> => {
  const response = await axiosClient.get(BASE_PATH);
  return response.data;
};

export const getPromotionById = async (id: string): Promise<Promotion> => {
  const response = await axiosClient.get(`${BASE_PATH}/${id}`);
  return response.data;
};

/**
 * Admin: Create promo code
 * POST /promotions
 */
export const createPromotion = async (payload: CreatePromotionPayload): Promise<Promotion> => {
  const response = await axiosClient.post(BASE_PATH, payload);
  return response.data;
};

/**
 * Admin: Edit promo code
 * PUT /promotions/{id}
 */
export const updatePromotion = async (id: string, payload: Partial<CreatePromotionPayload>): Promise<Promotion> => {
  const response = await axiosClient.put(`${BASE_PATH}/${id}`, payload);
  return response.data;
};

/**
 * Admin: Remove promo code
 * DELETE /promotions/{id}
 */
export const deletePromotion = async (id: string): Promise<void> => {
  await axiosClient.delete(`${BASE_PATH}/${id}`);
};
````

## File: src/api/reports.api.ts
````typescript
import axiosClient from "./axiosClient";
import { handleApiError } from "./api.helpers";
import type { ExportRequest, ReportResult, ReportQuery } from "@/types";

/**
 * Admin: Get Booking Report
 * GET /api/v1/admin/reports
 */
export async function generateReport(query?: ReportQuery): Promise<ReportResult> {
  try {
    const res = await axiosClient.get("/admin/reports", { params: query });
    return res.data as ReportResult;
  } catch (err) {
    handleApiError(err);
  }
}

/**
 * Admin: Export Report (Optional/Placeholder based on OAS)
 * If your backend has an export endpoint, add it here.
 */
export async function exportReport(payload: ExportRequest): Promise<Blob> {
  try {
    const res = await axiosClient.post("/admin/reports/export", payload, {
      responseType: "blob",
    });
    return res.data as Blob;
  } catch (err) {
    handleApiError(err);
  }
}
````

## File: src/api/users.api.ts
````typescript
import axiosClient from "./axiosClient";
import { handleApiError } from "./api.helpers";
import type { User } from "@/types";

export interface UserDetail extends User {
  total_bookings: number;
}

export interface UserListItem extends User {
  bookings_count: number;
}

/**
 * Admin: Get all users
 * GET /api/v1/users
 */
export async function getUsers(): Promise<UserListItem[]> {
  try {
    const res = await axiosClient.get("/users");
    // Backend returns PaginatedResponse[UserRead]
    const items = Array.isArray(res.data) ? res.data : (res.data?.items || []);
    return items;
  } catch (err) {
    handleApiError(err);
  }
}

/**
 * Admin: Get specific user
 * GET /api/v1/users/{user_id}
 */
export async function getUserById(id: string): Promise<UserDetail> {
  try {
    const res = await axiosClient.get(`/users/${id}`);
    return res.data;
  } catch (err) {
    handleApiError(err);
  }
}

/**
 * Admin: Update User Status (Suspend/Activate)
 * PUT /api/v1/users/{user_id}/status
 * Expects: UserStatusUpdate schema (usually { is_active: boolean })
 */
export async function toggleUserStatus(id: string, active: boolean): Promise<User> {
  try {
    const res = await axiosClient.put(`/users/${id}/status`, { is_active: active });
    return res.data;
  } catch (err) {
    handleApiError(err);
  }
}

/**
 * Admin: Delete User
 * DELETE /api/v1/users/{user_id}
 */
export async function deleteUser(id: string): Promise<void> {
  try {
    await axiosClient.delete(`/users/${id}`);
  } catch (err) {
    handleApiError(err);
  }
}
````

## File: src/assets/react.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
````

## File: src/assets/vite.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
````

## File: src/constants/routes.ts
````typescript
export const ROUTES = {
  // Public Screens
  HOME: "/",
  BOOK: "/book",
  EXPLORE: "/explore",
  SEARCH_RESULTS: "/search",
  FLIGHTS: "/flights/",
  FLIGHT_DETAIL: "/flights/:id",
  PNR_STATUS: "/pnr-status",
  MANAGE: "/manage",
  MANAGE_BOOKING_DETAIL: "/manage/:id",
  MANAGE_BOOKING_CANCEL: "/manage/:id/cancel",
  MANAGE_BOOKING_CANCELED: "/manage/:id/canceled",
  EXPLORE_DESTINATION: "/explore/destination",
  EXPLORE_PROMOS: "/explore/promos",
  EXPLORE_PROMO_DETAIL: "/explore/promos/deal",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  REGISTER: "/register",
  VERIFY_EMAIL_PENDING: "/verify-email-pending",
  AUTH_GATE: "/auth-gate",

  // User Screens (auth required)
  USER_DASHBOARD: "/dashboard",
  MY_BOOKINGS: "/my-bookings",
  BOOKING_DETAIL: "/my-bookings/:id",
  BOOKING_CANCEL: "/my-bookings/:id/cancel",
  RESCHEDULE_PICK: "/my-bookings/:id/reschedule/pick",
  RESCHEDULE_SUMMARY: "/my-bookings/:id/reschedule/summary",
  PROFILE_SETTINGS: "/profile/settings",
  BOOKING_PASSENGER_DETAILS: "/booking/passengers",
  BOOKING_SEAT_SELECTION: "/booking/seats",
  BOOKING_MEAL_PREFERENCE: "/booking/meals",
  BOOKING_SUMMARY: "/booking/summary",
  PAYMENT: "/payment",
  PAYMENT_OTP: "/payment/otp",
  BOOKING_CONFIRMATION: "/booking/confirmation",
  PAYMENT_FAILURE: "/payment/failure",

  // Admin Screens
  ADMIN_LOGIN: "/admin/login",
  ADMIN_DASHBOARD: "/admin",
  ADMIN_FLIGHTS: "/admin/flights",
  ADMIN_ADD_FLIGHT: "/admin/flights/new",
  ADMIN_EDIT_FLIGHT: "/admin/flights/:id/edit",
  ADMIN_DELETE_FLIGHT: "/admin/flights/:id/delete",
  ADMIN_USERS: "/admin/users",
  ADMIN_USER_PROFILE: "/admin/users/:id",
  ADMIN_USER_STATUS: "/admin/users/:id/status",
  ADMIN_BOOKINGS: "/admin/bookings",
  ADMIN_BOOKING_DETAIL: "/admin/bookings/:id",
  ADMIN_BOOKING_CANCEL: "/admin/bookings/:id/cancel",
  ADMIN_REPORTS: "/admin/reports",
  ADMIN_REPORT_RESULT: "/admin/reports/result",
  ADMIN_PROMOTIONS: "/admin/promotions",
  ADMIN_DESTINATIONS: "/admin/destinations",

  // Fallbacks
  UNAUTHORIZED: "/unauthorized",

  // Legacy aliases kept during transition
  SEARCH: "/search",
  BOOKING: "/booking/passengers",
  ADMIN: "/admin",
} as const;
````

## File: src/constants/theme.ts
````typescript
export const colors = {
  action: {
    primary:       'bg-bg-primary text-text-on-primary',
    primaryHover:  'hover:bg-bg-primary-hover',
    primaryPress:  'active:bg-bg-primary-press',
    secondary:     'bg-bg-selected text-text-link',
    ghost:         'border border-primary-50 text-text-link',
  },

  status: {
    success: 'bg-bg-success text-text-success',
    warning: 'bg-bg-warning text-text-warning',
    danger:  'bg-bg-danger text-text-danger',
    info:    'bg-bg-info text-text-info',
  },

  text: {
    primary:   'text-text-primary',
    secondary: 'text-text-secondary',
    tertiary:  'text-text-tertiary',
    disabled:  'text-text-disabled',
    link:      'text-text-link hover:text-text-link-hover',
    inverse:   'text-text-inverse',
    onPrimary: 'text-text-on-primary',
  },

  surface: {
    page:    'bg-bg-page',
    surface: 'bg-bg-surface',
    light:   'bg-bg-surface-light',
    warm:    'bg-bg-surface-warm',
    input:   'bg-bg-input',
  },
} as const

export const typography = {
  display: {
    d1: {
      bold:     'text-display-1 font-bold leading-tight',
      semiBold: 'text-display-1 font-semibold leading-tight',
      medium:   'text-display-1 font-medium leading-tight',
      normal:   'text-display-1 font-normal leading-tight',
      light:    'text-display-1 font-light leading-tight',
    },
    d2: {
      bold:     'text-display-2 font-bold leading-tight',
      semiBold: 'text-display-2 font-semibold leading-tight',
      medium:   'text-display-2 font-medium leading-tight',
      normal:   'text-display-2 font-normal leading-tight',
      light:    'text-display-2 font-light leading-tight',
    },
    d3: {
      bold:     'text-display-3 font-bold leading-tight',
      semiBold: 'text-display-3 font-semibold leading-tight',
      medium:   'text-display-3 font-medium leading-tight',
      normal:   'text-display-3 font-normal leading-tight',
      light:    'text-display-3 font-light leading-tight',
    },
  },
  heading: {
    h1: {
      bold:     'text-h1 font-bold leading-tight',
      semiBold: 'text-h1 font-semibold leading-tight',
      medium:   'text-h1 font-medium leading-tight',
      normal:   'text-h1 font-normal leading-tight',
      light:    'text-h1 font-light leading-tight',
    },
    h2: {
      bold:     'text-h2 font-bold leading-tight',
      semiBold: 'text-h2 font-semibold leading-tight',
      medium:   'text-h2 font-medium leading-tight',
      normal:   'text-h2 font-normal leading-tight',
      light:    'text-h2 font-light leading-tight',
    },
    h3: {
      bold:     'text-h3 font-bold leading-tight',
      semiBold: 'text-h3 font-semibold leading-tight',
      medium:   'text-h3 font-medium leading-tight',
      normal:   'text-h3 font-normal leading-tight',
      light:    'text-h3 font-light leading-tight',
    },
    h4: {
      bold:     'text-h4 font-bold leading-tight',
      semiBold: 'text-h4 font-semibold leading-tight',
      medium:   'text-h4 font-medium leading-tight',
      normal:   'text-h4 font-normal leading-tight',
      light:    'text-h4 font-light leading-tight',
    },
    h5: {
      bold:     'text-h5 font-bold leading-tight',
      semiBold: 'text-h5 font-semibold leading-tight',
      medium:   'text-h5 font-medium leading-tight',
      normal:   'text-h5 font-normal leading-tight',
      light:    'text-h5 font-light leading-tight',
    },
    h6: {
      bold:     'text-h6 font-bold leading-tight',
      semiBold: 'text-h6 font-semibold leading-tight',
      medium:   'text-h6 font-medium leading-tight',
      normal:   'text-h6 font-normal leading-tight',
      light:    'text-h6 font-light leading-tight',
    },
  },
  paragraph: {
    lg: {
      bold:     'text-para-lg font-bold leading-normal',
      semiBold: 'text-para-lg font-semibold leading-normal',
      medium:   'text-para-lg font-medium leading-normal',
      normal:   'text-para-lg font-normal leading-normal',
      light:    'text-para-lg font-light leading-normal',
    },
    md: {
      bold:     'text-para-md font-bold leading-normal',
      semiBold: 'text-para-md font-semibold leading-normal',
      medium:   'text-para-md font-medium leading-normal',
      normal:   'text-para-md font-normal leading-normal',
      light:    'text-para-md font-light leading-normal',
    },
    sm: {
      bold:     'text-para-sm font-bold leading-normal',
      semiBold: 'text-para-sm font-semibold leading-normal',
      medium:   'text-para-sm font-medium leading-normal',
      normal:   'text-para-sm font-normal leading-normal',
      light:    'text-para-sm font-light leading-normal',
    },
    xs: {
      bold:     'text-para-xs font-bold leading-normal',
      semiBold: 'text-para-xs font-semibold leading-normal',
      medium:   'text-para-xs font-medium leading-normal',
      normal:   'text-para-xs font-normal leading-normal',
      light:    'text-para-xs font-light leading-normal',
    },
  },
  label: {
    lg: {
      bold:     'text-label-lg font-bold leading-none',
      semiBold: 'text-label-lg font-semibold leading-none',
      medium:   'text-label-lg font-medium leading-none',
      normal:   'text-label-lg font-normal leading-none',
      light:    'text-label-lg font-light leading-none',
    },
    md: {
      bold:     'text-label-md font-bold leading-none',
      semiBold: 'text-label-md font-semibold leading-none',
      medium:   'text-label-md font-medium leading-none',
      normal:   'text-label-md font-normal leading-none',
      light:    'text-label-md font-light leading-none',
    },
    sm: {
      bold:     'text-label-sm font-bold leading-none',
      semiBold: 'text-label-sm font-semibold leading-none',
      medium:   'text-label-sm font-medium leading-none',
      normal:   'text-label-sm font-normal leading-none',
      light:    'text-label-sm font-light leading-none',
    },
    xs: {
      bold:     'text-label-xs font-bold leading-none',
      semiBold: 'text-label-xs font-semibold leading-none',
      medium:   'text-label-xs font-medium leading-none',
      normal:   'text-label-xs font-normal leading-none',
      light:    'text-label-xs font-light leading-none',
    },
  },
} as const
````

## File: src/hooks/useAsyncValue.ts
````typescript
import { useCallback, useEffect, useState } from "react";

export function useAsyncValue<T>(loader: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const nextData = await loader();
      setData(nextData);
      return nextData;
    } catch (nextError) {
      setError(nextError);
      setData(null);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [loader]);

  useEffect(() => {
    void refetch();
  }, [refetch]);

  return {
    data,
    isLoading,
    error,
    refetch,
  };
}

export default useAsyncValue;
````

## File: src/hooks/useAuth.ts
````typescript
import { useCallback } from "react";
import axiosClient from "@/api/axiosClient";
import {
  login as apiLogin,
  register as apiRegister,
  getProfile,
  forgotPassword as apiForgotPassword,
  resetPassword as apiResetPassword,
  resendVerification as apiResendVerification,
} from "@/api/auth.api";
import { useAuthStore } from "@/store/useAuthStore";
import type {
  LoginFormValues,
  RegisterFormValues,
  ForgotPasswordFormValues,
  ResetPasswordFormValues,
} from "@/validation/auth.schemas";

export function useAuth() {
  const store = useAuthStore();

  /**
   * Sign in: get token → attach to axios → fetch profile → store both.
   * Pages call this only — never touch auth.api.ts directly.
   */
  const signIn = useCallback(
    async (credentials: LoginFormValues) => {
      const { access_token } = await apiLogin(credentials);
      // Set header directly so /auth/me is authenticated immediately
      // (store.login is async state update — localStorage may not be ready in time)
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      const user = await getProfile();
      store.login(access_token, user);
    },
    [store],
  );

  /**
   * Register: creates account only.
   * Does NOT auto-login — backend requires email verification first.
   */
  const signUp = useCallback(
    async (payload: Omit<RegisterFormValues, "confirmPassword">) => {
      return await apiRegister(payload);
    },
    [],
  );

  const signOut = useCallback(() => {
    store.logout();
  }, [store]);

  /**
   * Refresh stored user profile from server.
   * Useful after profile edits.
   */
  const refreshProfile = useCallback(async () => {
    const user = await getProfile();
    store.setUser(user);
  }, [store]);

  const sendForgotPassword = useCallback(
    async (payload: ForgotPasswordFormValues) => {
      return await apiForgotPassword(payload);
    },
    [],
  );

  const sendResetPassword = useCallback(
    async (payload: Omit<ResetPasswordFormValues, "confirmPassword">) => {
      return await apiResetPassword(payload);
    },
    [],
  );

  const sendResendVerification = useCallback(async (email: string) => {
    return await apiResendVerification(email);
  }, []);

  return {
    // State
    user: store.user,
    token: store.token,
    isAuthenticated: store.isAuthenticated,

    // Actions
    signIn,
    signOut,
    signUp,
    refreshProfile,
    sendForgotPassword,
    sendResetPassword,
    sendResendVerification,
  };
}

export default useAuth;
````

## File: src/hooks/useBookings.ts
````typescript
import { useCallback, useEffect, useState } from "react";
import {
  cancelBooking,
  createBooking,
  getBookingDetail,
  getBookingsForUser,
  previewCancellation,
  rescheduleBooking,
} from "@/api/bookings.api";
import { useAuthStore } from "@/store/useAuthStore";
import type {
  APIError,
  Booking,
  BookingDetail,
  RescheduleRequest,
} from "@/types";

export function useMyBookings() {
  const { user } = useAuthStore();
  const [data, setData] = useState<Booking[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<APIError | null>(null);

  const fetchMyBookings = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const bookings = await getBookingsForUser(user?.id);
      setData(bookings);
      return bookings;
    } catch (err) {
      setError(err as APIError);
      setData(null);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [user?.id]);

  useEffect(() => {
    void fetchMyBookings();
  }, [fetchMyBookings]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchMyBookings,
  };
}

export function useBookingDetail(bookingId?: string) {
  const [data, setData] = useState<BookingDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<APIError | null>(null);

  const fetchDetail = useCallback(async () => {
    if (!bookingId) {
      setData(null);
      return null;
    }

    setIsLoading(true);
    setError(null);
    try {
      const detail = await getBookingDetail(bookingId);
      setData(detail);
      return detail;
    } catch (err) {
      setError(err as APIError);
      setData(null);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [bookingId]);

  useEffect(() => {
    void fetchDetail();
  }, [fetchDetail]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchDetail,
  };
}

export function useBookingActions() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<APIError | null>(null);

  const create = useCallback(async (payload: Partial<Booking>) => {
    setIsLoading(true);
    setError(null);
    try {
      return await createBooking(payload);
    } catch (err) {
      setError(err as APIError);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const previewCancel = useCallback(async (bookingId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      return await previewCancellation(bookingId);
    } catch (err) {
      setError(err as APIError);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const cancel = useCallback(
    async (bookingId: string) => {
      setIsLoading(true);
      setError(null);
      try {
        return await cancelBooking(bookingId);
      } catch (err) {
        setError(err as APIError);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const reschedule = useCallback(
    async (bookingId: string, payload: RescheduleRequest) => {
      setIsLoading(true);
      setError(null);
      try {
        return await rescheduleBooking(bookingId, payload);
      } catch (err) {
        setError(err as APIError);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return {
    isLoading,
    error,
    create,
    cancel,
    previewCancel,
    reschedule,
  };
}
````

## File: src/hooks/useFlights.ts
````typescript
import { useCallback, useEffect, useState } from "react";
import { searchFlights } from "@/api/flights.api";
import type { Flight, FlightSearchParams, APIError } from "@/types";

export function useFlights(initialParams?: FlightSearchParams) {
  const [data, setData] = useState<Flight[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<APIError | null>(null);
  const [params, setParams] = useState<FlightSearchParams>(initialParams ?? {});

  const fetch = useCallback(
    async (overrideParams?: FlightSearchParams) => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await searchFlights(overrideParams ?? params);
        setData(res);
      } catch (err) {
        setError(err as APIError);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    },
    [params],
  );

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    isLoading,
    error,
    refetch: fetch,
    setParams,
  };
}

export default useFlights;
````

## File: src/hooks/usePaymentFlow.ts
````typescript
import { useCallback, useState } from "react";
import {
  getPaymentFailure,
  getPaymentStatus,
  initializePayment,
  requestPaymentOtp,
  verifyPaymentOtp,
} from "@/api/payments.api";
import type {
  APIError,
  OTPChallenge,
  Payment,
  PaymentFailure,
  PaymentRequest,
} from "@/types";

type PaymentFlowAction =
  | "idle"
  | "initialize"
  | "request_otp"
  | "verify_otp"
  | "status"
  | "failure";

export function usePaymentFlow() {
  const [payment, setPayment] = useState<Payment | null>(null);
  const [otpChallenge, setOtpChallenge] = useState<OTPChallenge | null>(null);
  const [failure, setFailure] = useState<PaymentFailure | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<APIError | null>(null);
  const [lastAction, setLastAction] = useState<PaymentFlowAction>("idle");

  const initialize = useCallback(async (payload: PaymentRequest) => {
    setIsLoading(true);
    setError(null);
    setLastAction("initialize");

    try {
      const nextPayment = await initializePayment(payload);
      setPayment(nextPayment);
      setFailure(null);
      return nextPayment;
    } catch (err) {
      setError(err as APIError);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const requestOtp = useCallback(async (paymentId: string) => {
    setIsLoading(true);
    setError(null);
    setLastAction("request_otp");

    try {
      const challenge = await requestPaymentOtp(paymentId);
      setOtpChallenge(challenge);
      return challenge;
    } catch (err) {
      setError(err as APIError);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const verifyOtp = useCallback(async (paymentId: string, otpCode: string) => {
    setIsLoading(true);
    setError(null);
    setLastAction("verify_otp");

    try {
      const nextPayment = await verifyPaymentOtp(paymentId, otpCode);
      setPayment(nextPayment);
      return nextPayment;
    } catch (err) {
      setError(err as APIError);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchStatus = useCallback(async (paymentId: string) => {
    setIsLoading(true);
    setError(null);
    setLastAction("status");

    try {
      const nextPayment = await getPaymentStatus(paymentId);
      setPayment(nextPayment);
      return nextPayment;
    } catch (err) {
      setError(err as APIError);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchFailure = useCallback(async (paymentId: string) => {
    setIsLoading(true);
    setError(null);
    setLastAction("failure");

    try {
      const failureReason = await getPaymentFailure(paymentId);
      setFailure(failureReason);
      return failureReason;
    } catch (err) {
      setError(err as APIError);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    payment,
    otpChallenge,
    failure,
    isLoading,
    error,
    lastAction,
    initialize,
    requestOtp,
    verifyOtp,
    fetchStatus,
    fetchFailure,
  };
}

export default usePaymentFlow;
````

## File: src/hooks/usePNRStatus.ts
````typescript
import { useCallback, useState } from "react";
import { getPNRStatus, lookupPublicPNRStatus } from "@/api/pnr.api";
import type { APIError, PNRStatusResult } from "@/types";

export function usePNRStatus() {
  const [data, setData] = useState<PNRStatusResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<APIError | null>(null);

  const lookup = useCallback(async (pnr: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await getPNRStatus(pnr);
      setData(result);
      return result;
    } catch (err) {
      setError(err as APIError);
      setData(null);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const lookupPublic = useCallback(async (pnr: string, lastName: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await lookupPublicPNRStatus(pnr, lastName);
      setData(result);
      return result;
    } catch (err) {
      setError(err as APIError);
      setData(null);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    data,
    isLoading,
    error,
    lookup,
    lookupPublic,
  };
}

export default usePNRStatus;
````

## File: src/hooks/useReports.ts
````typescript
import { useCallback, useState } from "react";
import { exportReport, generateReport } from "@/api/reports.api";
import type {
  APIError,
  ExportRequest,
  ReportQuery,
  ReportResult,
} from "@/types";

export function useReports() {
  const [data, setData] = useState<ReportResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<APIError | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState<APIError | null>(null);

  const runReport = useCallback(async (query: ReportQuery) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await generateReport(query);
      setData(result);
      return result;
    } catch (err) {
      setError(err as APIError);
      setData(null);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const downloadReport = useCallback(async (payload: ExportRequest) => {
    setIsExporting(true);
    setExportError(null);

    try {
      const fileBlob = await exportReport(payload);
      return fileBlob;
    } catch (err) {
      setExportError(err as APIError);
      return null;
    } finally {
      setIsExporting(false);
    }
  }, []);

  return {
    data,
    isLoading,
    error,
    isExporting,
    exportError,
    runReport,
    downloadReport,
  };
}

export default useReports;
````

## File: src/pages/_shared/components/booking/BookingSummary.tsx
````typescript

````

## File: src/pages/_shared/components/booking/PassengerForm.tsx
````typescript

````

## File: src/pages/_shared/components/booking/PaymentForm.tsx
````typescript

````

## File: src/pages/_shared/components/flights/FlightCard.tsx
````typescript

````

## File: src/pages/_shared/components/flights/FlightSearchForm.tsx
````typescript
import { PlaneTakeoff, PlaneLanding, Calendar, Search } from "lucide-react";

const FlightSearchForm = () => {
  return (
    <div className="bg-white rounded-[16px] p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col md:flex-row items-center gap-0 max-w-6xl mx-auto border border-white/20">
      {/* Departure */}
      <div className="flex-1 w-full flex flex-col px-8 py-4 border-b md:border-b-0 md:border-r border-slate-100">
        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.05em] mb-2">
          Departure
        </label>
        <div className="flex items-center gap-3">
          <PlaneTakeoff className="text-[#496B92] w-5 h-5" />
          <input
            type="text"
            placeholder="Where from?"
            className="bg-transparent border-none outline-none text-slate-700 font-medium placeholder:text-slate-300 w-full text-[15px]"
          />
        </div>
      </div>

      {/* Arrival */}
      <div className="flex-1 w-full flex flex-col px-8 py-4 border-b md:border-b-0 md:border-r border-slate-100">
        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.05em] mb-2">
          Arrival
        </label>
        <div className="flex items-center gap-3">
          <PlaneLanding className="text-[#496B92] w-5 h-5" />
          <input
            type="text"
            placeholder="Where to?"
            className="bg-transparent border-none outline-none text-slate-700 font-medium placeholder:text-slate-300 w-full text-[15px]"
          />
        </div>
      </div>

      {/* Dates */}
      <div className="flex-1 w-full flex flex-col px-8 py-4 border-b md:border-b-0 md:border-r border-slate-100">
        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.05em] mb-2">
          Dates
        </label>
        <div className="flex items-center gap-3">
          <Calendar className="text-[#496B92] w-5 h-5" />
          <input
            type="text"
            placeholder="Select dates"
            className="bg-transparent border-none outline-none text-slate-700 font-medium placeholder:text-slate-300 w-full text-[15px]"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </div>
      </div>

      {/* Search Button */}
      <div className="px-2 py-2 w-full md:w-auto">
        <button className="w-full md:w-auto bg-[#496B92] hover:bg-[#385270] transition-all text-white px-10 py-[18px] rounded-[12px] flex items-center justify-center gap-3 font-bold shadow-md hover:shadow-lg active:scale-[0.98]">
          <Search className="w-5 h-5 stroke-[2.5px]" />
          <span className="text-[15px]">Search Flights</span>
        </button>
      </div>
    </div>
  );
};

export default FlightSearchForm;
````

## File: src/pages/_shared/components/layout/AdminRoute.tsx
````typescript
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { useAuthStore } from "@/store/useAuthStore";

const AdminRoute = () => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <Navigate to={ROUTES.HOME} replace />
    );
  }

  if (user?.role_id !== 1) {
    return <Navigate to={ROUTES.UNAUTHORIZED} replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
````

## File: src/pages/_shared/components/layout/Footer.tsx
````typescript
import Global from "@/assets/logos/Vector.png";

export default function Footer() {
  return (
    <footer className="bg-[#171A1C] py-12 text-white">
      <div className="mx-auto max-w-[1131px] px-6">
        {/* TOP FOOTER */}
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {/* LEFT */}
          <div className="flex max-w-sm flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src={Global} className="h-9 w-auto" />
              <span className="text-2xl font-bold">SkyLink</span>
            </div>

            <p className="text-sm text-[#75808A]">
              Connecting the Philippines and the world. Fly smarter, fly
              SkyLink.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                "/SocialMediaIcons/Icon.png",
                "/SocialMediaIcons/Icon-1.png",
                "/SocialMediaIcons/Icon-2.png",
                "/SocialMediaIcons/Icon-3.png",
              ].map((iconSrc) => (
                <div
                  key={iconSrc}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"
                >
                  <img src={iconSrc} alt="" className="h-4 w-4" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold uppercase">Company</h4>
              <a className="text-sm text-[#75808A]">About Us</a>
              <a className="text-sm text-[#75808A]">Careers</a>
              <a className="text-sm text-[#75808A]">Press</a>
              <a className="text-sm text-[#75808A]">Investor Relations</a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold uppercase">Fly</h4>
              <a className="text-sm text-[#75808A]">Book a Flight</a>
              <a className="text-sm text-[#75808A]">Flight Status</a>
              <a className="text-sm text-[#75808A]">Check-In Online</a>
              <a className="text-sm text-[#75808A]">Baggage Info</a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold uppercase">Support</h4>
              <a className="text-sm text-[#75808A]">Help Center</a>
              <a className="text-sm text-[#75808A]">Contact Us</a>
              <a className="text-sm text-[#75808A]">Feedback</a>
              <a className="text-sm text-[#75808A]">Accessibility</a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold uppercase">Legal</h4>
              <a className="text-sm text-[#75808A]">Terms</a>
              <a className="text-sm text-[#75808A]">Privacy</a>
              <a className="text-sm text-[#75808A]">Cookies</a>
              <a className="text-sm text-[#75808A]">Refund Policy</a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* BOTTOM COPYRIGHT */}
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-[#75808A] md:flex-row">
          <span>© 2026 SkyLink Airlines, Inc. All rights reserved.</span>

          <span>Philippines (PHP ₱)</span>
        </div>
      </div>
    </footer>
  );
}
````

## File: src/pages/_shared/components/layout/Navbar.tsx
````typescript
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { useAuthStore } from "@/store/useAuthStore";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/utils/cn";
import {
  LogOut,
  Settings,
  BookOpen,
  ChevronDown,
  LayoutDashboard,
} from "lucide-react";
import logos1 from "@/assets/logos/Logos-1.png";
import { colors, typography } from "@/constants/theme";
import { useState, useRef, useEffect } from "react";
import Toast from "@/pages/_shared/components/ui/Toast";

const Navbar = () => {
  const { isAuthenticated, user } = useAuthStore();
  const { signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isAdmin = user?.role_id === 1;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutToast, setShowLogoutToast] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: "Book", path: ROUTES.BOOK },
    { label: "Explore", path: ROUTES.EXPLORE },
    { label: "Flight Status", path: ROUTES.PNR_STATUS },
    { label: "Manage", path: ROUTES.MANAGE },
  ];

  const isActive = (path: string) => {
    if (path === ROUTES.HOME) {
      return location.pathname === ROUTES.HOME;
    }
    return location.pathname.startsWith(path) && path !== "#";
  };

  const handleLogout = () => {
    signOut();
    setIsMenuOpen(false);
    setShowLogoutToast(true);
    setTimeout(() => {
      navigate(ROUTES.HOME);
    }, 1000);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const userInitial = user?.first_name?.[0] || user?.email?.[0] || "U";

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <Toast
        message="Logout Successful"
        isOpen={showLogoutToast}
        onClose={() => setShowLogoutToast(false)}
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-0">
          <img src={logos1} alt="SkyLink logo" className="size-16" />
          <span
            className="text-[24px] font-normal text-[#496B92] tracking-[0.01em]"
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            SkyLink
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={cn(
                "text-[16px] font-medium transition-colors relative pb-1",
                isActive(link.path)
                  ? "text-[#496B92] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-[#496B92]"
                  : "text-slate-500 hover:text-slate-800",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side Actions */}
        <div className="flex items-center gap-6">
          {!isAuthenticated ? (
            <Link
              to={ROUTES.LOGIN}
              className={`${colors.action.ghost} ${typography.label.sm.semiBold} rounded-lg px-6 py-2.5 hover:bg-primary-10 transition-colors whitespace-nowrap border border-slate-100`}
            >
              Sign In
            </Link>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-3 rounded-xl p-1.5 hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
              >
                <div className="flex size-9 items-center justify-center rounded-full bg-[#5E83AE] text-white font-bold text-sm shadow-sm">
                  {userInitial.toUpperCase()}
                </div>
                <div className="hidden md:flex items-center gap-1">
                  <span className="text-sm font-bold text-slate-700">
                    {user?.first_name || "Account"}
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-4 text-slate-400 transition-transform",
                      isMenuOpen && "rotate-180",
                    )}
                  />
                </div>
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-2 z-50 overflow-hidden transform origin-top-right transition-all animate-in fade-in zoom-in duration-200">
                  <div className="px-4 py-3 border-b border-slate-50 mb-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Signed in as
                    </p>
                    <p className="text-sm font-bold text-slate-900 truncate">
                      {user?.email}
                    </p>
                  </div>

                  {isAdmin && (
                    <Link
                      to={ROUTES.ADMIN_DASHBOARD}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-60 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LayoutDashboard size={18} />
                      Admin Portal
                    </Link>
                  )}

                  <Link
                    to={ROUTES.PROFILE_SETTINGS}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-60 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Settings size={18} />
                    Account Settings
                  </Link>

                  <Link
                    to={ROUTES.MANAGE}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-60 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BookOpen size={18} />
                    My Bookings
                  </Link>

                  <div className="h-px bg-slate-50 my-1" />

                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-sm font-bold text-rose-600 hover:bg-rose-50 transition-colors"
                  >
                    <LogOut size={18} />
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
````

## File: src/pages/_shared/components/layout/ProtectedRoute.tsx
````typescript
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { useAuthStore } from "@/store/useAuthStore";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
````

## File: src/pages/_shared/components/layout/PublicOnlyRoute.tsx
````typescript
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { useAuthStore } from "@/store/useAuthStore";

const PublicOnlyRoute = () => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Outlet />;
  }

  if (user?.role_id === 1) {
    return <Navigate to={ROUTES.ADMIN_DASHBOARD} replace />;
  }

  return <Navigate to={ROUTES.USER_DASHBOARD} replace />;
};

export default PublicOnlyRoute;
````

## File: src/pages/_shared/components/ui/Button.tsx
````typescript
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: "primary" | "secondary";
};

const VARIANTS: Record<string, string> = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  variant = "primary",
  className = "",
  disabled,
  ...rest
}) => {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded transition-colors disabled:opacity-60";

  return (
    <button
      type="button"
      className={`${base} ${VARIANTS[variant]} ${className}`}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      ) : null}
      <span>{children}</span>
    </button>
  );
};

export default Button;
````

## File: src/pages/_shared/components/ui/DataTable.tsx
````typescript
import { memo, type ReactNode } from "react";

export type TableColumn<T> = {
  key: string;
  header: string;
  cell: (row: T) => ReactNode;
};

type DataTableProps<T> = {
  columns: TableColumn<T>[];
  rows: T[];
  rowKey: (row: T, index: number) => string;
  emptyState?: ReactNode;
};

function DataTableComponent<T>({
  columns,
  rows,
  rowKey,
  emptyState,
}: DataTableProps<T>) {
  // Defensive check for non-array rows
  const safeRows = Array.isArray(rows) ? rows : [];

  if (safeRows.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500">
        {emptyState ?? "No records to display."}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[680px] border-collapse text-left text-sm">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-4 py-3 font-semibold">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {safeRows.map((row, index) => (
            <tr key={rowKey(row, index)} className="border-t border-slate-100">
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-3 text-slate-700">
                  {column.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Use a generic memo wrapper to handle the generic type T
export const DataTable = memo(DataTableComponent) as typeof DataTableComponent;

export default DataTable;
````

## File: src/pages/_shared/components/ui/DatePicker.tsx
````typescript
import { useRef } from "react";
import { CiCalendar } from "react-icons/ci";
import { colors, typography } from "@/constants/theme";

type DatePickerProps = {
  value?: string;
  min?: string;
  max?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  min,
  max,
  placeholder = "Select date",
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <label
      className={`flex items-center gap-2 ${colors.surface.input} border border-tertiary-30 rounded-[10px] px-4 h-14 cursor-pointer`}
      onClick={() => inputRef.current?.showPicker?.()}
    >
      <CiCalendar size={16} strokeWidth={1} className="shrink-0 text-primary-60" />
      <input
        ref={inputRef}
        type="date"
        value={value}
        min={min}
        max={max}
        placeholder={placeholder}
        onChange={e => onChange?.(e.target.value)}
        className={`bg-transparent flex-1 ${typography.paragraph.md.normal} ${colors.text.primary} outline-none cursor-pointer`}
      />
    </label>
  );
};

export default DatePicker;
````

## File: src/pages/_shared/components/ui/EmptyState.tsx
````typescript
import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactNode;
};

const EmptyState = ({ title, description, action }: EmptyStateProps) => {
  return (
    <section className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
      <h3 className="text-base font-semibold text-slate-800">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      {action ? <div className="mt-4">{action}</div> : null}
    </section>
  );
};

export default EmptyState;
````

## File: src/pages/_shared/components/ui/ErrorState.tsx
````typescript
type ErrorStateProps = {
  title?: string;
  message: string;
  onRetry?: () => void;
};

const ErrorState = ({
  title = "Something went wrong",
  message,
  onRetry,
}: ErrorStateProps) => {
  return (
    <section className="rounded-xl border border-rose-200 bg-rose-50 p-6 text-rose-800">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm">{message}</p>
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-md border border-rose-300 bg-white px-3 py-1.5 text-sm font-medium text-rose-700 hover:bg-rose-100"
        >
          Retry
        </button>
      ) : null}
    </section>
  );
};

export default ErrorState;
````

## File: src/pages/_shared/components/ui/FilterBar.tsx
````typescript
import type { ReactNode } from "react";

type FilterBarProps = {
  title?: string;
  actions?: ReactNode;
  children: ReactNode;
};

const FilterBar = ({ title, actions, children }: FilterBarProps) => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      {title || actions ? (
        <div className="mb-4 flex items-center justify-between gap-3">
          {title ? (
            <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
          ) : (
            <span />
          )}
          {actions}
        </div>
      ) : null}

      <div className="grid gap-3 md:grid-cols-3">{children}</div>
    </section>
  );
};

export default FilterBar;
````

## File: src/pages/_shared/components/ui/Input.tsx
````typescript
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | null | undefined;
};

const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  ...rest
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label ? (
        <label className="mb-1 text-sm font-medium">{label}</label>
      ) : null}
      <input
        className={`px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ${error ? "border-red-400" : "border-gray-300"}`}
        {...rest}
      />
      {error ? (
        <span className="mt-1 text-xs text-red-500">{error}</span>
      ) : null}
    </div>
  );
};

export default Input;
````

## File: src/pages/_shared/components/ui/Modal.tsx
````typescript
import { type ReactNode, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
};

const Modal = ({
  isOpen,
  title,
  description,
  onClose,
  children,
  footer,
}: ModalProps) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
            {description ? (
              <p className="mt-1 text-sm text-slate-600">{description}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-slate-300 px-2 py-1 text-xs text-slate-600 hover:bg-slate-100"
          >
            Close
          </button>
        </div>

        <div>{children}</div>
        {footer ? <div className="mt-5">{footer}</div> : null}
      </div>
    </div>
  );
};

export default Modal;
````

## File: src/pages/_shared/components/ui/ScreenPlaceholder.tsx
````typescript
type ScreenPlaceholderProps = {
  id: string;
  title: string;
  description?: string;
  scope?: "public" | "user" | "admin";
};

const SCOPE_STYLES: Record<
  NonNullable<ScreenPlaceholderProps["scope"]>,
  string
> = {
  public: "border-sky-200 bg-sky-50 text-sky-700",
  user: "border-emerald-200 bg-emerald-50 text-emerald-700",
  admin: "border-amber-200 bg-amber-50 text-amber-700",
};

const ScreenPlaceholder = ({
  id,
  title,
  description,
  scope = "public",
}: ScreenPlaceholderProps) => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <div
        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${SCOPE_STYLES[scope]}`}
      >
        {scope} screen
      </div>

      <h1 className="mt-4 text-3xl font-bold text-slate-900">{title}</h1>
      <p className="mt-2 text-sm font-medium text-slate-500">{id}</p>
      <p className="mt-4 max-w-2xl text-slate-600">
        {description ??
          "Screen shell is ready for final UI handoff. Business logic and routing are being implemented first."}
      </p>
    </section>
  );
};

export default ScreenPlaceholder;
````

## File: src/pages/_shared/components/ui/Skeleton.tsx
````typescript
import React from "react";

const Skeleton: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`bg-gray-200/60 animate-pulse rounded ${className}`} />
  );
};

export default Skeleton;
````

## File: src/pages/_shared/components/ui/StatusBadge.tsx
````typescript
type StatusTone = "neutral" | "success" | "warning" | "danger" | "info";

const TONE_CLASS: Record<StatusTone, string> = {
  neutral: "border-slate-200 bg-slate-100 text-slate-700",
  success: "border-emerald-200 bg-emerald-100 text-emerald-700",
  warning: "border-amber-200 bg-amber-100 text-amber-700",
  danger: "border-rose-200 bg-rose-100 text-rose-700",
  info: "border-sky-200 bg-sky-100 text-sky-700",
};

function statusToTone(status: string): StatusTone {
  const normalized = status.trim().toLowerCase();

  if (
    ["confirmed", "captured", "on_time", "landed", "active"].includes(
      normalized,
    )
  ) {
    return "success";
  }
  if (
    ["pending", "payment_pending", "otp_required", "boarding"].includes(
      normalized,
    )
  ) {
    return "warning";
  }
  if (["cancelled", "failed", "declined", "suspended"].includes(normalized)) {
    return "danger";
  }
  if (["rescheduled", "refunded", "delayed"].includes(normalized)) {
    return "info";
  }

  return "neutral";
}

type StatusBadgeProps = {
  label: string;
  tone?: StatusTone;
};

const StatusBadge = ({ label, tone }: StatusBadgeProps) => {
  const resolvedTone = tone ?? statusToTone(label);

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold capitalize ${TONE_CLASS[resolvedTone]}`}
    >
      {label.replace(/_/g, " ")}
    </span>
  );
};

export default StatusBadge;
````

## File: src/pages/_shared/components/ui/Stepper.tsx
````typescript
type Step = {
  id: string;
  label: string;
};

type StepperProps = {
  steps: Step[];
  activeStepId: string;
};

const Stepper = ({ steps, activeStepId }: StepperProps) => {
  const activeIndex = steps.findIndex((step) => step.id === activeStepId);

  return (
    <ol className="grid gap-3 md:grid-cols-4">
      {steps.map((step, index) => {
        const isComplete = activeIndex > index;
        const isActive = activeIndex === index;

        return (
          <li
            key={step.id}
            className={`rounded-xl border px-4 py-3 text-sm ${
              isActive
                ? "border-sky-300 bg-sky-50 text-sky-800"
                : isComplete
                  ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                  : "border-slate-200 bg-white text-slate-600"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-wide">
              Step {index + 1}
            </p>
            <p className="mt-1 font-medium">{step.label}</p>
          </li>
        );
      })}
    </ol>
  );
};

export default Stepper;
````

## File: src/pages/_shared/components/ui/Toast.tsx
````typescript
import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { cn } from "@/utils/cn";

type ToastProps = {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  type?: "success" | "error" | "info";
};

const Toast = ({ message, isOpen, onClose, type = "success" }: ToastProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      const timeout = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-[9999] flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 transition-all duration-300 transform",
        isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className={cn(
        "flex size-10 items-center justify-center rounded-xl",
        type === "success" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
      )}>
        {type === "success" ? <CheckCircle2 size={24} /> : <X size={24} />}
      </div>
      <div className="pr-4 text-left">
        <p className="text-sm font-bold text-slate-900">{message}</p>
        <p className="text-xs font-medium text-slate-500">Action completed successfully.</p>
      </div>
      <button 
        onClick={onClose}
        className="text-slate-300 hover:text-slate-500 transition-colors"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default Toast;
````

## File: src/pages/admin/_components/AdminLayout.tsx
````typescript
import { type ReactNode, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopHeader from "./AdminTopHeader";

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F3F5F7]">
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AdminTopHeader onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
````

## File: src/pages/admin/_components/AdminSidebar.tsx
````typescript
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/utils/cn";
import {
  LayoutDashboard,
  Plane,
  Users,
  BookOpen,
  BarChart3,
  ScrollText,
  Settings,
  LogOut,
  X,
  Tag,
} from "lucide-react";
import logos1 from "@/assets/logos/Logos-1.png";
import { useState } from "react";
import Toast from "@/pages/_shared/components/ui/Toast";
import { MapPin } from "lucide-react";


type AdminSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AdminSidebar = ({ isOpen, onClose }: AdminSidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [showLogoutToast, setShowLogoutToast] = useState(false);

  const handleLogout = () => {
    signOut();
    setShowLogoutToast(true);
    setTimeout(() => {
      navigate(ROUTES.HOME);
    }, 1500);
  };

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: ROUTES.ADMIN_DASHBOARD },
    { label: "Flights", icon: Plane, path: ROUTES.ADMIN_FLIGHTS },
    { label: "Destinations", icon: MapPin, path: ROUTES.ADMIN_DESTINATIONS },
    { label: "Promotions", icon: Tag, path: ROUTES.ADMIN_PROMOTIONS },
    { label: "Users", icon: Users, path: ROUTES.ADMIN_USERS },
    { label: "Bookings", icon: BookOpen, path: ROUTES.ADMIN_BOOKINGS },
    {
      label: "Reports",
      icon: BarChart3,
      path: ROUTES.ADMIN_REPORTS,
      subItems: [
        { label: "Activity Log", icon: ScrollText, path: "/admin/activity-log" },
      ],
    },
    { label: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <Toast 
        message="Logout Successful" 
        isOpen={showLogoutToast} 
        onClose={() => setShowLogoutToast(false)} 
      />
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[260px] bg-[#3B5470] text-slate-100 transition-transform duration-300 transform lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 lg:py-8">
            <Link to={ROUTES.ADMIN_DASHBOARD} className="flex items-center gap-3">
              <img src={logos1} alt="SkyLink" className="size-10 brightness-0 invert" />
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white">SkyLink</h1>
                <p className="text-[10px] uppercase tracking-widest text-slate-300 font-bold opacity-70">Admin Portal</p>
              </div>
            </Link>
            <button className="lg:hidden" onClick={onClose}>
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  className={cn(
                    "group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    isActive(item.path)
                      ? "bg-[#496B92] text-white"
                      : "text-slate-300 hover:bg-[#496B92]/50 hover:text-white",
                  )}
                >
                  <item.icon size={20} className={cn(isActive(item.path) ? "text-white" : "text-slate-400 group-hover:text-white")} />
                  {item.label}
                </Link>
                {item.subItems && (
                  <div className="mt-1 ml-6 space-y-1">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-4 py-2 text-[13px] font-medium transition-colors",
                          isActive(sub.path)
                            ? "text-white"
                            : "text-slate-400 hover:text-white",
                        )}
                      >
                        <sub.icon size={16} />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom section */}
          <div className="border-t border-[#496B92] p-4">
            <div className="flex items-center gap-3 rounded-xl bg-[#496B92]/30 p-3 mb-4">
              <div className="flex size-9 items-center justify-center rounded-lg bg-blue-500 text-white font-bold">A</div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-white">Admin User</p>
                <p className="truncate text-xs text-slate-400">My Profile</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-300 hover:bg-red-500/10 hover:text-red-400 transition-colors"
            >
              <LogOut size={20} />
              Log Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
````

## File: src/pages/admin/_components/AdminTopHeader.tsx
````typescript
import { Bell, Menu, Search } from "lucide-react";

type AdminTopHeaderProps = {
  onMenuClick: () => void;
};

const AdminTopHeader = ({ onMenuClick }: AdminTopHeaderProps) => {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex flex-1 items-center gap-4">
        <button
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
          onClick={onMenuClick}
        >
          <Menu size={24} />
        </button>

        {/* Search Bar */}
        <div className="relative hidden max-w-md flex-1 md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="h-11 w-full rounded-xl bg-slate-50 pl-10 pr-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-blue-500/10 border border-transparent focus:border-blue-500/20"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        {/* Notifications */}
        <button className="relative rounded-full p-2.5 text-slate-500 hover:bg-slate-100 transition-colors">
          <Bell size={22} />
          <span className="absolute right-2 top-2 flex size-2.5 items-center justify-center rounded-full bg-red-500 ring-2 ring-white">
            <span className="sr-only">New notification</span>
          </span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 border-l border-slate-200 pl-5">
          <div className="hidden text-right lg:block">
            <p className="text-sm font-bold text-slate-900 leading-none">Admin User</p>
            <p className="mt-1 text-[11px] text-slate-500 font-medium uppercase tracking-wider">Administrator</p>
          </div>
          <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500 text-white font-bold shadow-lg shadow-blue-500/20">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopHeader;
````

## File: src/pages/admin/_components/DashboardCharts.tsx
````typescript
import { cn } from "@/utils/cn";

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Bookings Over Time - Line Chart Placeholder */}
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900 leading-none">Bookings Over Time</h3>
          <p className="mt-1 text-sm text-slate-500 font-medium">Last 30 days</p>
        </div>
        <div className="relative h-64 w-full">
          {/* Simple SVG Line Chart representation */}
          <svg className="h-full w-full" viewBox="0 0 400 160" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#496B92" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#496B92" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,100 Q20,80 40,110 T80,70 T120,90 T160,50 T200,80 T240,40 T280,60 T320,30 T360,70 T400,20"
              fill="none"
              stroke="#496B92"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M0,100 Q20,80 40,110 T80,70 T120,90 T160,50 T200,80 T240,40 T280,60 T320,30 T360,70 T400,20 V160 H0 Z"
              fill="url(#gradient)"
            />
          </svg>
          <div className="mt-4 flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>Mar 13</span>
            <span>Mar 23</span>
            <span>Apr 02</span>
            <span>Apr 12</span>
          </div>
        </div>
      </div>

      {/* Revenue by Route - Bar Chart Placeholder */}
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900 leading-none">Revenue by Route</h3>
          <p className="mt-1 text-sm text-slate-500 font-medium">Top 5 routes this month</p>
        </div>
        <div className="space-y-4">
          {[
            { label: "MNL → LAX", value: 90, color: "bg-[#5D80A6]" },
            { label: "MNL → NRT", value: 75, color: "bg-[#7195BA]" },
            { label: "MNL → SIN", value: 60, color: "bg-[#86A9CD]" },
            { label: "MNL → KUL", value: 45, color: "bg-[#9CBEDE]" },
            { label: "MNL → CEB", value: 30, color: "bg-[#B2D2F0]" },
          ].map((route) => (
            <div key={route.label} className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-600">
                <span>{route.label}</span>
              </div>
              <div className="h-4 w-full rounded-full bg-slate-50">
                <div
                  className={cn("h-full rounded-full transition-all duration-1000", route.color)}
                  style={{ width: `${route.value}%` }}
                />
              </div>
            </div>
          ))}
          <div className="mt-6 flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-50 pt-3">
            <span>₱0k</span>
            <span>₱350k</span>
            <span>₱700k</span>
            <span>₱1050k</span>
            <span>₱1400k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
````

## File: src/pages/admin/_components/KPICard.tsx
````typescript
import { cn } from "@/utils/cn";
import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";

type KPICardProps = {
  label: string;
  value: string | number;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
};

const KPICard = ({
  label,
  value,
  change,
  trend,
  icon: Icon,
  iconBg,
  iconColor,
}: KPICardProps) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-xl",
            iconBg,
          )}
        >
          <Icon className={cn("size-6", iconColor)} />
        </div>
        <div
          className={cn(
            "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-bold",
            trend === "up"
              ? "bg-emerald-50 text-emerald-600"
              : "bg-rose-50 text-rose-600",
          )}
        >
          {trend === "up" ? (
            <ArrowUpRight size={14} strokeWidth={3} />
          ) : (
            <ArrowDownRight size={14} strokeWidth={3} />
          )}
          {change}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <h3 className="mt-1 text-2xl font-bold text-slate-900">{value}</h3>
      </div>
    </div>
  );
};

export default KPICard;
````

## File: src/pages/admin/_components/SystemAlerts.tsx
````typescript
import { cn } from "@/utils/cn";
import { AlertTriangle, CreditCard, RefreshCcw } from "lucide-react";

const SystemAlerts = () => {
  const alerts = [
    {
      title: "Low Seats",
      description: "3 flights with fewer than 10 seats available",
      icon: AlertTriangle,
      color: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-100",
    },
    {
      title: "Failed Payments",
      description: "2 failed payment transactions pending review",
      icon: CreditCard,
      color: "bg-rose-50",
      iconColor: "text-rose-600",
      borderColor: "border-rose-100",
    },
    {
      title: "Pending Refund",
      description: "1 refund request pending approval",
      icon: RefreshCcw,
      color: "bg-sky-50",
      iconColor: "text-sky-600",
      borderColor: "border-sky-100",
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-slate-900 px-1">System Alerts</h3>
      <div className="grid grid-cols-1 gap-4">
        {alerts.map((alert) => (
          <div
            key={alert.title}
            className={cn(
              "flex items-start gap-4 rounded-2xl border p-4 transition-all hover:scale-[1.02]",
              alert.color,
              alert.borderColor,
            )}
          >
            <div
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm",
                alert.iconColor,
              )}
            >
              <alert.icon size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-slate-900">{alert.title}</h4>
              <p className="mt-0.5 text-xs font-medium text-slate-600">{alert.description}</p>
              <button className="mt-3 text-[11px] font-bold uppercase tracking-wider text-slate-900 hover:underline">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemAlerts;
````

## File: src/pages/admin/AdminAddFlightPage.tsx
````typescript
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFlight } from "@/api/flights.api";
import { getAircraft } from "@/api/destinations.api";
import { ROUTES } from "@/constants/routes";
import AdminLayout from "./_components/AdminLayout";
import Input from "@/pages/_shared/components/ui/Input";
import Button from "@/pages/_shared/components/ui/Button";
import { ChevronLeft, Save, Plane, Tag } from "lucide-react";
import { flightSchema, type FlightFormValues } from "@/validation/flight.schemas";
import type { Aircraft } from "@/types/destinations.types";
import { cn } from "@/utils/cn";

const AdminAddFlightPage = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const [aircraftList, setAircraftList] = useState<Aircraft[]>([]);
  const [isLoadingAircraft, setIsLoadingAircraft] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FlightFormValues>({
    resolver: zodResolver(flightSchema) as any,
    defaultValues: {
      status: "scheduled",
      stops: 0,
      seat_pricing: [],
    },
  });

  const { fields, replace } = useFieldArray({
    control,
    name: "seat_pricing",
  });

  const selectedAircraftId = watch("aircraftId");

  // Fetch aircraft on mount
  useEffect(() => {
    const fetchAircraft = async () => {
      try {
        const data = await getAircraft();
        setAircraftList(data);
      } catch (err) {
        console.error("Failed to fetch aircraft", err);
      } finally {
        setIsLoadingAircraft(false);
      }
    };
    fetchAircraft();
  }, []);

  // Update dynamic pricing fields when aircraft changes
  useEffect(() => {
    if (selectedAircraftId) {
      const aircraft = aircraftList.find(a => a.id === Number(selectedAircraftId));
      if (aircraft && aircraft.seats) {
        // Get unique seat classes from the aircraft's seats
        const uniqueClasses = Array.from(new Set(aircraft.seats.map(s => s.seat_class_id)));
        const initialPricing = uniqueClasses.map(classId => ({
          seat_class_id: classId,
          price: 0,
        }));
        replace(initialPricing);
      }
    }
  }, [selectedAircraftId, aircraftList, replace]);

  const onSubmit = async (data: FlightFormValues) => {
    setServerError(null);
    try {
      await createFlight(data as any);
      navigate(ROUTES.ADMIN_FLIGHTS);
    } catch (err: any) {
      const detail = err.details?.detail;
      const message = Array.isArray(detail) 
        ? detail.map((d: any) => `${d.loc.join('.')}: ${d.msg}`).join(' | ')
        : err.message || "Failed to create flight";
      setServerError(message);
    }
  };

  const getClassName = (classId: number) => {
    // This assumes we have a way to map ID to Name. 
    // In a real app, we'd fetch SeatClasses or have them in the aircraft object.
    // For now, let's look at the first seat matching the ID in the selected aircraft.
    const aircraft = aircraftList.find(a => a.id === Number(selectedAircraftId));
    const seat = aircraft?.seats?.find(s => s.seat_class_id === classId);
    return seat?.seat_class?.name || (classId === 1 ? "Economy" : "Business");
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
            <button onClick={() => navigate(ROUTES.ADMIN_FLIGHTS)} className="hover:text-[#496B92] transition-colors">Flights</button>
            <ChevronLeft size={14} className="rotate-180" />
            <span className="text-[#496B92]">Add Flight</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Add New Flight</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 pb-20">
          {serverError && (
            <div className="p-4 bg-rose-50 text-rose-600 text-sm font-bold rounded-2xl border border-rose-100 flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-rose-600" />
                <span>Error from Server:</span>
              </div>
              <p className="ml-5 font-medium opacity-90">{serverError}</p>
            </div>
          )}

          {/* Flight Information */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
              <h3 className="font-bold text-slate-900">Flight Information</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Flight Number *"
                placeholder="e.g. PR 2191"
                error={errors.flightNumber?.message}
                {...register("flightNumber")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Airline *"
                placeholder="e.g. Philippine Airlines"
                error={errors.airline?.message}
                {...register("airline")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Origin Airport (IATA) *"
                placeholder="e.g. MNL"
                error={errors.origin?.message}
                {...register("origin")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Destination Airport (IATA) *"
                placeholder="e.g. CEB"
                error={errors.destination?.message}
                {...register("destination")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Departure *"
                type="datetime-local"
                error={errors.departureTime?.message}
                {...register("departureTime")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Arrival *"
                type="datetime-local"
                error={errors.arrivalTime?.message}
                {...register("arrivalTime")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
            </div>
          </section>

          {/* Aircraft Selection */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Plane size={18} className="text-[#496B92]" />
                Select Aircraft
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">Aircraft *</label>
                <select 
                  className="w-full h-12 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 transition-all"
                  {...register("aircraftId")}
                  disabled={isLoadingAircraft}
                >
                  <option value="">Select an aircraft...</option>
                  {aircraftList.map(a => (
                    <option key={a.id} value={a.id}>{a.model} ({a.registration}) - {a.total_seats} seats</option>
                  ))}
                </select>
                {errors.aircraftId?.message && <p className="text-xs text-rose-500 ml-1">{errors.aircraftId.message}</p>}
              </div>
            </div>
          </section>

          {/* Dynamic Fares Section */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Tag size={18} className="text-[#496B92]" />
                Fare Configurations
              </h3>
            </div>
            <div className="p-6">
              {!selectedAircraftId ? (
                <div className="py-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <p className="text-slate-500 text-sm">Please select an aircraft first to configure pricing.</p>
                </div>
              ) : fields.length === 0 ? (
                 <div className="py-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <p className="text-slate-500 text-sm">No seat classes found for this aircraft. Please check Aircraft settings.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {fields.map((field, index) => (
                    <div key={field.id} className="space-y-2">
                      <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                        {getClassName(field.seat_class_id)} Fare (₱) *
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₱</span>
                        <input
                          type="number"
                          placeholder="0.00"
                          className="w-full h-12 rounded-xl bg-slate-50 border border-slate-200 pl-8 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 transition-all"
                          {...register(`seat_pricing.${index}.price` as const)}
                        />
                      </div>
                      {errors.seat_pricing?.[index]?.price?.message && (
                        <p className="text-xs text-rose-500 ml-1">{errors.seat_pricing[index].price.message}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Status & Options */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
              <h3 className="font-bold text-slate-900">Status & Options</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">Status *</label>
                <select 
                  className="w-full h-12 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 transition-all"
                  {...register("status")}
                >
                  <option value="scheduled">Scheduled</option>
                  <option value="boarding">Boarding</option>
                  <option value="on_time">On Time</option>
                  <option value="delayed">Delayed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <Input
                label="Stops *"
                type="number"
                error={errors.stops?.message}
                {...register("stops")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
            </div>
          </section>

          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={() => navigate(ROUTES.ADMIN_FLIGHTS)}
              className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 transition-colors"
            >
              <ChevronLeft size={20} />
              Cancel
            </button>
            <Button
              type="submit"
              loading={isSubmitting}
              className="bg-[#496B92] hover:bg-[#3B5470] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-[#496B92]/20 flex items-center gap-2"
            >
              <Save size={20} />
              Save Flight
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminAddFlightPage;
````

## File: src/pages/admin/AdminDashboardPage.tsx
````typescript
import { useCallback, useMemo } from "react";
import { ROUTES } from "@/constants/routes";
import { Link } from "react-router-dom";
import { Plane, Ticket, Users, Banknote } from "lucide-react";
import AdminLayout from "./_components/AdminLayout";
import KPICard from "./_components/KPICard";
import DashboardCharts from "./_components/DashboardCharts";
import SystemAlerts from "./_components/SystemAlerts";
import DataTable, {
  type TableColumn,
} from "@/pages/_shared/components/ui/DataTable";
import StatusBadge from "@/pages/_shared/components/ui/StatusBadge";
import { getAllBookingsAdmin } from "@/api/bookings.api";
import { getUsers } from "@/api/users.api";
import { searchFlights } from "@/api/flights.api";
import type { Booking, Flight } from "@/types";
import useAsyncValue from "@/hooks/useAsyncValue";

type RecentBooking = {
  pnr: string;
  passenger: string;
  route: string;
  date: string;
  status: string;
  amount: string;
};

type DashboardData = {
  bookings: Booking[];
  flights: Flight[];
  totalUsers: number;
};

function mapBookingToRecentBooking(booking: Booking): RecentBooking {
  const route = `${booking.flight?.origin ?? "MNL"} → ${booking.flight?.destination ?? "CEB"}`;

  const p = booking.passengers?.[0];
  const passenger = `${p?.firstName ?? "Guest"} ${p?.lastName ?? "Passenger"}`;

  const date =
    booking.flight?.departureTime?.split?.("T")?.[0] ??
    booking.createdAt?.split?.("T")?.[0] ??
    "";

  return {
    pnr: booking.pnr ?? booking.id.toUpperCase(),
    passenger,
    route,
    date,
    status: booking.status,
    amount: `₱${(booking.totalPrice ?? 0).toLocaleString("en-US")}`,
  };
}

const AdminDashboardPage = () => {
  const loader = useCallback(async (): Promise<DashboardData> => {
    try {
      const [bookings, users, flights] = await Promise.all([
        getAllBookingsAdmin(),
        getUsers(),
        searchFlights(),
      ]);

      return {
        bookings,
        flights,
        totalUsers: users.filter((user) => user.role_id !== 1).length,
      };
    } catch {
      return {
        bookings: [],
        flights: [],
        totalUsers: 0,
      };
    }
  }, []);

  const { data } = useAsyncValue(loader);
  const dashboardData = data ?? { bookings: [], flights: [], totalUsers: 0 };

  const recentBookings = useMemo(() => {
    return dashboardData.bookings.slice(0, 5).map(mapBookingToRecentBooking);
  }, [dashboardData.bookings]);

  const totalRevenue = useMemo(
    () =>
      dashboardData.bookings.reduce(
        (sum, booking) => sum + (booking.totalPrice ?? 0),
        0,
      ),
    [dashboardData.bookings],
  );

  const columns: TableColumn<RecentBooking>[] = useMemo(
    () => [
      {
        key: "pnr",
        header: "PNR",
        cell: (row) => (
          <span className="font-bold text-blue-600">{row.pnr}</span>
        ),
      },
      {
        key: "passenger",
        header: "Passenger",
        cell: (row) => (
          <span className="font-medium text-slate-700">{row.passenger}</span>
        ),
      },
      {
        key: "route",
        header: "Route",
        cell: (row) => <span className="text-slate-600">{row.route}</span>,
      },
      {
        key: "date",
        header: "Date",
        cell: (row) => <span className="text-slate-500">{row.date}</span>,
      },
      {
        key: "status",
        header: "Status",
        cell: (row) => <StatusBadge label={row.status} />,
      },
      {
        key: "amount",
        header: "Amount",
        cell: (row) => (
          <span className="font-bold text-slate-900">{row.amount}</span>
        ),
      },
    ],
    [],
  );

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Welcome Header */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Dashboard</h2>
          <p className="text-slate-500 font-medium">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <KPICard
            label="Total Flights"
            value={String(dashboardData.flights.length)}
            change="8%"
            trend="up"
            icon={Plane}
            iconBg="bg-blue-50"
            iconColor="text-blue-600"
          />
          <KPICard
            label="Active Bookings"
            value={String(
              dashboardData.bookings.filter(
                (booking) => booking.status !== "cancelled",
              ).length,
            )}
            change="12%"
            trend="up"
            icon={Ticket}
            iconBg="bg-sky-50"
            iconColor="text-sky-600"
          />
          <KPICard
            label="Total Users"
            value={String(dashboardData.totalUsers)}
            change="5%"
            trend="up"
            icon={Users}
            iconBg="bg-emerald-50"
            iconColor="text-emerald-600"
          />
          <KPICard
            label="Revenue Today (₱)"
            value={`₱${totalRevenue.toLocaleString("en-US")}`}
            change="3%"
            trend="down"
            icon={Banknote}
            iconBg="bg-amber-50"
            iconColor="text-amber-600"
          />
        </div>

        {/* Charts */}
        <DashboardCharts />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Recent Bookings Table */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">
                  Recent Bookings
                </h3>
                <Link
                  to={ROUTES.ADMIN_BOOKINGS}
                  className="text-sm font-bold text-blue-600 hover:underline"
                >
                  View all →
                </Link>
              </div>
              <DataTable
                columns={columns}
                rows={recentBookings}
                rowKey={(row) => row.pnr}
              />
            </div>
          </div>

          {/* System Alerts */}
          <div>
            <SystemAlerts />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboardPage;
````

## File: src/pages/admin/AdminDestinationsPage.tsx
````typescript
import { useEffect, useMemo, useState } from "react";
import AdminLayout from "./_components/AdminLayout";
import DataTable, { type TableColumn } from "@/pages/_shared/components/ui/DataTable";
import Button from "@/pages/_shared/components/ui/Button";
import Modal from "@/pages/_shared/components/ui/Modal";
import {
  Search, Plus, Edit2, Trash2, MapPin, Plane, Tag,
} from "lucide-react";
import {
  getAirports, createAirport, updateAirport, deleteAirport,
  getAircraft, createAircraft, updateAircraft, deleteAircraft,
  getSeatClasses, createSeatClass, updateSeatClass, deleteSeatClass,
} from "@/api/destinations.api";
import type {
  Airport, Aircraft, SeatClass, SeatConfiguration,
} from "@/types/destinations.types";

type Tab = "airports" | "aircraft" | "seat-classes";

const AdminDestinationsPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("airports");
  const [searchQuery, setSearchQuery] = useState("");

  // Data
  const [airports, setAirports] = useState<Airport[]>([]);
  const [aircraft, setAircraft] = useState<Aircraft[]>([]);
  const [seatClasses, setSeatClasses] = useState<SeatClass[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Modal state
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Airport | Aircraft | SeatClass | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [form, setForm] = useState<Record<string, string | number>>({});
  const [seatConfigs, setSeatConfigs] = useState<SeatConfiguration[]>([]);

  const fetchAll = async () => {
    setIsLoading(true);
    try {
      const [a, ac, sc] = await Promise.allSettled([
        getAirports(),
        getAircraft(),
        getSeatClasses()
      ]);
      
      if (a.status === "fulfilled") setAirports(a.value);
      if (ac.status === "fulfilled") setAircraft(ac.value);
      else if (ac.reason?.response?.status === 500) {
        console.error("Aircraft fetch failed (500). Missing eager loading in backend?");
      }
      if (sc.status === "fulfilled") setSeatClasses(sc.value);

    } catch (err) {
      console.error("Unexpected error in fetchAll", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchAll(); }, []);

  const openAdd = () => { 
    setForm({}); 
    // Start with one default config if it's aircraft
    setSeatConfigs([{ seat_class_id: seatClasses[0]?.id || 1, quantity: 150 }]);
    setAddModalOpen(true); 
  };
  const openEdit = (item: Airport | Aircraft | SeatClass) => { setSelectedItem(item); setForm({ ...item }); setEditModalOpen(true); };
  const openDelete = (item: Airport | Aircraft | SeatClass) => { setSelectedItem(item); setDeleteModalOpen(true); };

  const handleAdd = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    // Aircraft specific validation
    if (activeTab === "aircraft" && (!form.model || !form.registration)) {
      alert("Please fill in Model and Registration Number");
      return;
    }

    setIsSubmitting(true);
    try {
      if (activeTab === "airports") await createAirport(form as any);
      if (activeTab === "aircraft") {
        const payload = { 
          model: String(form.model),
          registration: String(form.registration),
          seat_configurations: seatConfigs.map(c => ({ 
            seat_class_id: Number(c.seat_class_id), 
            quantity: Number(c.quantity) 
          }))
        };
        console.log("Creating Aircraft with Batch Payload:", payload);
        await createAircraft(payload);
      }
      if (activeTab === "seat-classes") await createSeatClass(form as any);
      setAddModalOpen(false);
      fetchAll();
    } catch (err: any) { 
      console.error("Add failed:", err);
      const detail = err.details?.detail;
      const errorMessage = Array.isArray(detail) 
        ? detail.map((d: any) => `${d.loc.join('.')}: ${d.msg}`).join(' | ')
        : typeof detail === 'string' ? detail : (err.message || "Failed to add item");
      
      alert(`Error: ${errorMessage}`);
    }
    finally { setIsSubmitting(false); }
  };

  const handleEdit = async () => {
    if (!selectedItem) return;
    setIsSubmitting(true);
    try {
      if (activeTab === "airports") await updateAirport(selectedItem.id, form as any);
      if (activeTab === "aircraft") await updateAircraft(selectedItem.id, { model: String(form.model), registration: String(form.registration) });
      if (activeTab === "seat-classes") await updateSeatClass(selectedItem.id, form as any);
      setEditModalOpen(false);
      fetchAll();
    } catch (err) { console.error(err); }
    finally { setIsSubmitting(false); }
  };

  const handleDelete = async () => {
    if (!selectedItem) return;
    setIsSubmitting(true);
    try {
      if (activeTab === "airports") await deleteAirport(selectedItem.id);
      if (activeTab === "aircraft") await deleteAircraft(selectedItem.id);
      if (activeTab === "seat-classes") await deleteSeatClass(selectedItem.id);
      setDeleteModalOpen(false);
      fetchAll();
    } catch (err) { console.error(err); }
    finally { setIsSubmitting(false); }
  };

  const field = (key: string, label: string, type = "text") => (
    <div className="space-y-1.5">
      <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">{label}</label>
      <input
        type={type}
        value={form[key] ?? ""}
        onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
        className="w-full h-12 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm outline-none focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 transition-all"
      />
    </div>
  );

  const airportColumns: TableColumn<Airport>[] = [
    { key: "iata_code", header: "IATA", cell: (r) => <span className="font-bold text-[#496B92]">{r.iata_code}</span> },
    { key: "name", header: "AIRPORT NAME", cell: (r) => <span className="font-medium text-slate-900">{r.name}</span> },
    { key: "city", header: "CITY", cell: (r) => <span className="text-slate-600">{r.city}</span> },
    { key: "country", header: "COUNTRY", cell: (r) => <span className="text-slate-600">{r.country}</span> },
    { key: "timezone", header: "TIMEZONE", cell: (r) => <span className="text-slate-500 text-xs">{r.timezone}</span> },
    {
      key: "actions", header: "ACTIONS", cell: (r) => (
        <div className="flex gap-2">
          <button onClick={() => openEdit(r)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-100 transition-colors"><Edit2 size={15} /></button>
          <button onClick={() => openDelete(r)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg border border-rose-100 transition-colors"><Trash2 size={15} /></button>
        </div>
      ),
    },
  ];

  const aircraftColumns: TableColumn<Aircraft>[] = [
    { key: "registration", header: "REG. NO.", cell: (r) => <span className="font-bold text-[#496B92]">{r.registration}</span> },
    { key: "model", header: "MODEL", cell: (r) => <span className="font-medium text-slate-900">{r.model}</span> },
    { key: "total_seats", header: "TOTAL SEATS", cell: (r) => <span className="text-slate-600">{r.total_seats}</span> },
    {
      key: "actions", header: "ACTIONS", cell: (r) => (
        <div className="flex gap-2">
          <button onClick={() => openEdit(r)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-100 transition-colors"><Edit2 size={15} /></button>
          <button onClick={() => openDelete(r)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg border border-rose-100 transition-colors"><Trash2 size={15} /></button>
        </div>
      ),
    },
  ];

  const seatClassColumns: TableColumn<SeatClass>[] = [
    { key: "id", header: "ID", cell: (r) => <span className="text-slate-400 text-xs">#{r.id}</span> },
    { key: "name", header: "CLASS NAME", cell: (r) => <span className="font-bold text-slate-900">{r.name}</span> },
    {
      key: "actions", header: "ACTIONS", cell: (r) => (
        <div className="flex gap-2">
          <button onClick={() => openEdit(r)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-100 transition-colors"><Edit2 size={15} /></button>
          <button onClick={() => openDelete(r)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg border border-rose-100 transition-colors"><Trash2 size={15} /></button>
        </div>
      ),
    },
  ];

  const filteredAirports = useMemo(() =>
    airports.filter((a) =>
      a.iata_code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.city.toLowerCase().includes(searchQuery.toLowerCase())
    ), [airports, searchQuery]);

  const filteredAircraft = useMemo(() =>
    aircraft.filter((a) =>
      a.registration.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.model.toLowerCase().includes(searchQuery.toLowerCase())
    ), [aircraft, searchQuery]);

  const filteredSeatClasses = useMemo(() =>
    seatClasses.filter((s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    ), [seatClasses, searchQuery]);

  const tabLabel = activeTab === "airports" ? "Airport" : activeTab === "aircraft" ? "Aircraft" : "Seat Class";

  const addFormFields = () => {
    if (activeTab === "airports") return (
      <div className="space-y-4">
        {field("iata_code", "IATA Code *")}
        {field("name", "Airport Name *")}
        <div className="grid grid-cols-2 gap-4">
          {field("city", "City *")}
          {field("country", "Country *")}
        </div>
        {field("timezone", "Timezone *")}
      </div>
    );
    if (activeTab === "aircraft") return (
      <div className="space-y-4">
        {field("registration", "Registration No. *")}
        {field("model", "Model *")}
        
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">Configuration (Automation)</label>
            <button 
              type="button"
              onClick={() => setSeatConfigs([...seatConfigs, { seat_class_id: seatClasses[0]?.id || 1, quantity: 0 }])}
              className="text-xs font-bold text-[#496B92] hover:underline"
            >
              + Add Class
            </button>
          </div>
          
          {seatConfigs.map((config, idx) => (
            <div key={idx} className="flex gap-2 items-end bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="flex-1 space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Class</label>
                <select
                  value={config.seat_class_id}
                  onChange={(e) => {
                    const updated = [...seatConfigs];
                    updated[idx].seat_class_id = Number(e.target.value);
                    setSeatConfigs(updated);
                  }}
                  className="w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-[#496B92]"
                >
                  {seatClasses.map(sc => (
                    <option key={sc.id} value={sc.id}>{sc.name}</option>
                  ))}
                </select>
              </div>
              <div className="w-24 space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Qty</label>
                <input
                  type="number"
                  value={config.quantity}
                  onChange={(e) => {
                    const updated = [...seatConfigs];
                    updated[idx].quantity = Number(e.target.value);
                    setSeatConfigs(updated);
                  }}
                  className="w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-[#496B92]"
                />
              </div>
              <button 
                type="button"
                onClick={() => setSeatConfigs(seatConfigs.filter((_, i) => i !== idx))}
                className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
    return (
      <div className="space-y-4">
        {field("name", "Class Name *")}
      </div>
    );
  };

  const editFormFields = () => {
    if (activeTab === "airports") return (
      <div className="space-y-4">
        {field("name", "Airport Name")}
        <div className="grid grid-cols-2 gap-4">
          {field("city", "City")}
          {field("country", "Country")}
        </div>
        {field("timezone", "Timezone")}
      </div>
    );
    if (activeTab === "aircraft") return (
      <div className="space-y-4">
        {field("registration", "Registration No.")}
        {field("model", "Model")}
      </div>
    );
    return (
      <div className="space-y-4">
        {field("name", "Class Name")}
      </div>
    );
  };

  const tabs: { key: Tab; label: string; icon: typeof MapPin }[] = [
    { key: "airports", label: "Airports", icon: MapPin },
    { key: "aircraft", label: "Aircraft", icon: Plane },
    { key: "seat-classes", label: "Seat Classes", icon: Tag },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Destinations & Fleet</h2>
            <p className="text-sm font-medium text-slate-500">Manage airports, aircraft, and seat classes</p>
          </div>
          <button
            onClick={openAdd}
            className="flex items-center justify-center gap-2 bg-[#496B92] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-[#3B5470] transition-all shadow-lg shadow-[#496B92]/20"
          >
            <Plus size={20} />
            Add {tabLabel}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 p-1 bg-white rounded-xl border border-slate-100 shadow-sm w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setSearchQuery(""); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === tab.key
                  ? "bg-[#496B92] text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder={`Search ${tabLabel.toLowerCase()}s...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 w-full rounded-xl bg-slate-50 pl-10 pr-4 text-sm outline-none border border-transparent focus:border-[#496B92]/20 focus:bg-white focus:ring-2 focus:ring-[#496B92]/10 transition-all"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          {activeTab === "airports" && (
            <DataTable
              columns={airportColumns}
              rows={filteredAirports}
              rowKey={(r) => String(r.id)}
              emptyState={
                <div className="py-20 text-center">
                  {isLoading
                    ? <div className="animate-spin size-8 border-4 border-[#496B92] border-t-transparent rounded-full mx-auto" />
                    : <p className="text-slate-500 font-medium">No airports found.</p>}
                </div>
              }
            />
          )}
          {activeTab === "aircraft" && (
            <DataTable
              columns={aircraftColumns}
              rows={filteredAircraft}
              rowKey={(r) => String(r.id)}
              emptyState={
                <div className="py-20 text-center">
                  {isLoading
                    ? <div className="animate-spin size-8 border-4 border-[#496B92] border-t-transparent rounded-full mx-auto" />
                    : <p className="text-slate-500 font-medium">No aircraft found.</p>}
                </div>
              }
            />
          )}
          {activeTab === "seat-classes" && (
            <DataTable
              columns={seatClassColumns}
              rows={filteredSeatClasses}
              rowKey={(r) => String(r.id)}
              emptyState={
                <div className="py-20 text-center">
                  {isLoading
                    ? <div className="animate-spin size-8 border-4 border-[#496B92] border-t-transparent rounded-full mx-auto" />
                    : <p className="text-slate-500 font-medium">No seat classes found.</p>}
                </div>
              }
            />
          )}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-50 bg-slate-50/30">
            <p className="text-sm font-medium text-slate-500">
              {activeTab === "airports" && `${filteredAirports.length} airports`}
              {activeTab === "aircraft" && `${filteredAircraft.length} aircraft`}
              {activeTab === "seat-classes" && `${filteredSeatClasses.length} seat classes`}
            </p>
          </div>
        </div>
      </div>

      {/* Add Modal */}
      <Modal isOpen={addModalOpen} onClose={() => setAddModalOpen(false)} title={`Add ${tabLabel}`}>
        <div className="py-4 space-y-4">
          {addFormFields()}
          <div className="flex gap-3 pt-2">
            <Button variant="secondary" className="flex-1 rounded-xl h-12" onClick={() => setAddModalOpen(false)} type="button">
              Cancel
            </Button>
            <Button
              className="flex-1 bg-[#496B92] hover:bg-[#3B5470] text-white h-12 rounded-xl font-bold"
              onClick={handleAdd}
              loading={isSubmitting}
            >
              Add {tabLabel}
            </Button>
          </div>
        </div>
      </Modal>

      {/* Edit Modal */}
      <Modal isOpen={editModalOpen} onClose={() => setEditModalOpen(false)} title={`Edit ${tabLabel}`}>
        <div className="py-4 space-y-4">
          {editFormFields()}
          <div className="flex gap-3 pt-2">
            <Button variant="secondary" className="flex-1 rounded-xl h-12" onClick={() => setEditModalOpen(false)} type="button">
              Cancel
            </Button>
            <Button
              className="flex-1 bg-[#496B92] hover:bg-[#3B5470] text-white h-12 rounded-xl font-bold"
              onClick={handleEdit}
              loading={isSubmitting}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </Modal>

      {/* Delete Modal */}
      <Modal isOpen={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} title={`Delete ${tabLabel}`}>
        <div className="py-4 space-y-6">
          <p className="text-sm text-slate-600 font-medium text-center">
            Are you sure you want to delete this {tabLabel.toLowerCase()}? This cannot be undone.
          </p>
          <div className="flex gap-3 pt-2">
            <Button variant="secondary" className="flex-1 rounded-xl h-12" onClick={() => setDeleteModalOpen(false)}>
              Cancel
            </Button>
            <Button
              className="flex-1 bg-white hover:bg-rose-50 border border-rose-200 text-rose-600 h-12 rounded-xl"
              onClick={handleDelete}
              loading={isSubmitting}
            >
              Confirm Delete
            </Button>
          </div>
        </div>
      </Modal>
    </AdminLayout>
  );
};

export default AdminDestinationsPage;
````

## File: src/pages/admin/AdminEditFlightPage.tsx
````typescript
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getFlightById, updateFlight } from "@/api/flights.api";
import { ROUTES } from "@/constants/routes";
import AdminLayout from "./_components/AdminLayout";
import Input from "@/pages/_shared/components/ui/Input";
import Button from "@/pages/_shared/components/ui/Button";
import { ChevronLeft, Save } from "lucide-react";
import { flightSchema, type FlightFormValues } from "@/validation/flight.schemas";
import type { Flight } from "@/types";
import { cn } from "@/utils/cn";

const AdminEditFlightPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FlightFormValues>({
    resolver: zodResolver(flightSchema) as any,
  });

  const selectedCabinClass = watch("cabinClass");
  const showBusinessFare = selectedCabinClass === "business" || selectedCabinClass === "first";

  useEffect(() => {
    const fetchFlight = async () => {
      if (!id) return;
      try {
        const flight = await getFlightById(id);
                if (!flight) {
          setServerError("Flight not found.");
          setIsLoading(false);
          return;
        }
        // Format dates for datetime-local input (YYYY-MM-DDTHH:mm)
        const departureTime = flight.departureTime ? new Date(flight.departureTime).toISOString().slice(0, 16) : "";
        const arrivalTime = flight.arrivalTime ? new Date(flight.arrivalTime).toISOString().slice(0, 16) : "";
        
        reset({
          ...flight,
          departureTime,
          arrivalTime,
        } as any);
      } catch (err) {
        console.error("Failed to fetch flight", err);
        setServerError("Failed to load flight details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFlight();
  }, [id, reset]);

  const onSubmit = async (data: FlightFormValues) => {
    if (!id) return;
    setServerError(null);
    try {
      await updateFlight(id, data as Partial<Flight>);
      navigate(ROUTES.ADMIN_FLIGHTS);
    } catch (err: any) {
      // Show detailed error if available from backend (FastAPI style)
      const detail = err.details?.detail;
      const message = Array.isArray(detail) 
        ? detail.map((d: any) => `${d.loc.join('.')}: ${d.msg}`).join(' | ')
        : err.message || "Failed to update flight";
      setServerError(message);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="animate-spin size-10 border-4 border-[#496B92] border-t-transparent rounded-full" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Breadcrumbs & Title */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
            <button onClick={() => navigate(ROUTES.ADMIN_FLIGHTS)} className="hover:text-[#496B92] transition-colors">Flights</button>
            <ChevronLeft size={14} className="rotate-180" />
            <span className="text-[#496B92]">Edit Flight</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Edit Flight — PR 2191</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 pb-20">
          {serverError && (
            <div className="p-4 bg-rose-50 text-rose-600 text-sm font-bold rounded-2xl border border-rose-100 flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-rose-600" />
                <span>Error from Server:</span>
              </div>
              <p className="ml-5 font-medium opacity-90">{serverError}</p>
            </div>
          )}

          {/* Flight Information Section */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
              <h3 className="font-bold text-slate-900">Flight Information</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Flight Number *"
                placeholder="e.g. PR 2191"
                error={errors.flightNumber?.message}
                {...register("flightNumber")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Airline *"
                placeholder="e.g. Philippine Airlines"
                error={errors.airline?.message}
                {...register("airline")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Origin Airport (IATA) *"
                placeholder="e.g. MNL"
                error={errors.origin?.message}
                {...register("origin")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Destination Airport (IATA) *"
                placeholder="e.g. CEB"
                error={errors.destination?.message}
                {...register("destination")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Departure *"
                type="datetime-local"
                error={errors.departureTime?.message}
                {...register("departureTime")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Arrival *"
                type="datetime-local"
                error={errors.arrivalTime?.message}
                {...register("arrivalTime")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Flight Image URL"
                placeholder="https://images.unsplash.com/photo-..."
                error={errors.imageUrl?.message}
                {...register("imageUrl")}
                className="[&>input]:rounded-xl [&>input]:h-12 md:col-span-2"
              />
            </div>
          </section>

          {/* Aircraft & Capacity Section */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
              <h3 className="font-bold text-slate-900">Aircraft & Capacity</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">Aircraft Type *</label>
                <select 
                  className="w-full h-12 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 transition-all"
                  {...register("cabinClass")}
                >
                  <option value="economy">Economy Only</option>
                  <option value="business">Business & Economy</option>
                  <option value="first">First, Business & Economy</option>
                </select>
              </div>
              <Input
                label="Total Seats *"
                type="number"
                placeholder="e.g. 180"
                error={errors.totalSeats?.message}
                {...register("totalSeats")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Seats Available *"
                type="number"
                placeholder="e.g. 150"
                error={errors.seatsAvailable?.message}
                {...register("seatsAvailable")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
            </div>
          </section>

          {/* Fares & Status Section */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
              <h3 className="font-bold text-slate-900">Fares & Status</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Economy Fare (₱) *"
                type="number"
                placeholder="₱ 0"
                error={errors.price?.message}
                {...register("price")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Business Fare (₱)"
                type="number"
                placeholder="₱ 0"
                className={cn("[&>input]:rounded-xl [&>input]:h-12", !showBusinessFare && "opacity-50")}
                disabled={!showBusinessFare}
              />
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">Status *</label>
                <select 
                  className="w-full h-12 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 transition-all"
                  {...register("status")}
                >
                  <option value="scheduled">Scheduled</option>
                  <option value="boarding">Boarding</option>
                  <option value="on_time">On Time</option>
                  <option value="delayed">Delayed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </section>

          {/* Change Log Section */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden text-left">
            <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
              <h3 className="font-bold text-slate-900">Change Log</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="size-2 rounded-full bg-blue-500 mt-1.5" />
                  <div className="w-px h-full bg-slate-100 min-h-[40px]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Departure time changed from 05:30 to 06:00</p>
                  <p className="text-xs text-slate-400 mt-0.5">Admin User · 2026-04-10 14:32</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="size-2 rounded-full bg-blue-500 mt-1.5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Total seats updated from 160 to 180</p>
                  <p className="text-xs text-slate-400 mt-0.5">Admin User · 2026-04-09 09:15</p>
                </div>
              </div>
            </div>
          </section>

          {/* Form Actions */}
          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={() => navigate(ROUTES.ADMIN_FLIGHTS)}
              className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 transition-colors"
            >
              <ChevronLeft size={20} />
              Cancel
            </button>
            <Button
              type="submit"
              loading={isSubmitting}
              className="bg-[#496B92] hover:bg-[#3B5470] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-[#496B92]/20 flex items-center gap-2"
            >
              <Save size={20} />
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminEditFlightPage;
````

## File: src/pages/admin/AdminFlightsPage.tsx
````typescript
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { useFlights } from "@/hooks/useFlights";
import { deleteFlight } from "@/api/flights.api";
import AdminLayout from "./_components/AdminLayout";
import DataTable, { type TableColumn } from "@/pages/_shared/components/ui/DataTable";
import StatusBadge from "@/pages/_shared/components/ui/StatusBadge";
import Button from "@/pages/_shared/components/ui/Button";
import Modal from "@/pages/_shared/components/ui/Modal";
import { Search, Plus, Edit2, Trash2, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react";
import type { Flight } from "@/types";
import { cn } from "@/utils/cn";

const AdminFlightsPage = () => {
  const navigate = useNavigate();
  const { data: flights, isLoading, refetch } = useFlights();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [flightToDelete, setFlightToDelete] = useState<Flight | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Memoized filtering and sorting logic for performance
  const filteredFlights = useMemo(() => {
    const data = flights || [];
    return data.filter((flight) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        flight.flightNumber?.toLowerCase().includes(query) ||
        flight.airline?.toLowerCase().includes(query) ||
        flight.origin?.toLowerCase().includes(query) ||
        flight.destination?.toLowerCase().includes(query);
      
      const matchesStatus = statusFilter === "" || flight.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    }).sort((a, b) => {
      if (sortBy === "departure") {
        return new Date(a.departureTime).getTime() - new Date(b.departureTime).getTime();
      }
      if (sortBy === "price") {
        return (a.price || 0) - (b.price || 0);
      }
      if (sortBy === "seats") {
        return (b.seatsAvailable || 0) - (a.seatsAvailable || 0);
      }
      return 0;
    });
  }, [flights, searchQuery, statusFilter, sortBy]);

  const handleOpenDeleteModal = (flight: Flight) => {
    setFlightToDelete(flight);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!flightToDelete) return;
    setIsDeleting(true);
    try {
      await deleteFlight(flightToDelete.id);
      setDeleteModalOpen(false);
      setFlightToDelete(null);
      refetch();
    } catch (err) {
      console.error("Failed to delete flight", err);
    } finally {
      setIsDeleting(false);
    }
  };

  const columns: TableColumn<Flight>[] = useMemo(() => [
    {
      key: "flightNumber",
      header: "FLIGHT NO",
      cell: (row) => <span className="font-bold text-slate-900">{row.flightNumber}</span>,
    },
    {
      key: "airline",
      header: "AIRLINE",
      cell: (row) => <span className="text-slate-700">{row.airline}</span>,
    },
    {
      key: "route",
      header: "ROUTE",
      cell: (row) => (
        <span className="text-[#496B92] font-medium">
          {row.origin} → {row.destination}
        </span>
      ),
    },
    {
      key: "departure",
      header: "DEPARTURE",
      cell: (row) => {
        const date = row.departureTime ? new Date(row.departureTime) : null;
        return (
          <div className="flex flex-col">
            <span className="text-slate-700 font-medium">
              {date ? date.toISOString().split('T')[0] : "—"}
            </span>
            <span className="text-xs text-slate-500">
              {date ? date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "—"}
            </span>
          </div>
        );
      },
    },
    {
      key: "arrival",
      header: "ARRIVAL",
      cell: (row) => {
        const date = row.arrivalTime ? new Date(row.arrivalTime) : null;
        return (
          <div className="flex flex-col">
            <span className="text-slate-700 font-medium">
              {date ? date.toISOString().split('T')[0] : "—"}
            </span>
            <span className="text-xs text-slate-500">
              {date ? date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "—"}
            </span>
          </div>
        );
      },
    },
    {
      key: "status",
      header: "STATUS",
      cell: (row) => <StatusBadge label={row.status || "scheduled"} />,
    },
    {
      key: "seats",
      header: "SEATS AVAIL.",
      cell: (row) => (
        <span className={cn(
          "font-medium",
          (row.seatsAvailable ?? 0) < 20 ? "text-rose-600" : "text-slate-700"
        )}>
          {row.seatsAvailable ?? 0} / {row.totalSeats || 180}
        </span>
      ),
    },
    {
      key: "actions",
      header: "ACTIONS",
      cell: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(ROUTES.ADMIN_EDIT_FLIGHT.replace(":id", row.id))}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-blue-100"
            title="Edit Flight"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => handleOpenDeleteModal(row)}
            className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors border border-rose-100"
            title="Delete Flight"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ], [navigate]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Flights</h2>
            <p className="text-sm font-medium text-slate-500">{filteredFlights.length} flights found</p>
          </div>
          <Link
            to={ROUTES.ADMIN_ADD_FLIGHT}
            className="flex items-center justify-center gap-2 bg-[#496B92] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-[#3B5470] transition-all shadow-lg shadow-[#496B92]/20"
          >
            <Plus size={20} />
            Add Flight
          </Link>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search by flight no, airline, or route..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 w-full rounded-xl bg-slate-50 pl-10 pr-4 text-sm outline-none border border-transparent focus:border-[#496B92]/20 focus:bg-white focus:ring-2 focus:ring-[#496B92]/10 transition-all"
            />
          </div>
          <div className="flex gap-3">
            <select 
              className="h-11 px-4 rounded-xl bg-slate-50 text-sm font-medium border border-transparent focus:border-[#496B92]/20 outline-none min-w-[140px]"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Status</option>
              <option value="scheduled">Scheduled</option>
              <option value="boarding">Boarding</option>
              <option value="on_time">On Time</option>
              <option value="delayed">Delayed</option>
              <option value="cancelled">Cancelled</option>
              <option value="landed">Landed</option>
            </select>
            <select 
              className="h-11 px-4 rounded-xl bg-slate-50 text-sm font-medium border border-transparent focus:border-[#496B92]/20 outline-none min-w-[140px]"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="departure">Departure</option>
              <option value="price">Price</option>
              <option value="seats">Seats</option>
            </select>
          </div>
        </div>

        {/* Flights Table */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <DataTable
            columns={columns}
            rows={filteredFlights}
            rowKey={(row) => row.id}
            emptyState={
              <div className="py-20 text-center">
                {isLoading ? (
                  <div className="animate-spin size-8 border-4 border-[#496B92] border-t-transparent rounded-full mx-auto" />
                ) : (
                  <p className="text-slate-500 font-medium">No flights found matching your criteria.</p>
                )}
              </div>
            }
          />

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-50 bg-slate-50/30">
            <p className="text-sm font-medium text-slate-500">
              Showing 1-{filteredFlights.length} of {filteredFlights.length}
            </p>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-colors disabled:opacity-50" disabled>
                <ChevronLeft size={18} />
              </button>
              <div className="flex items-center gap-1">
                <button className="size-9 rounded-lg bg-[#496B92] text-white font-bold text-sm">1</button>
              </div>
              <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-colors disabled:opacity-50" disabled>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        title="Delete Flight"
      >
        <div className="py-4 space-y-6">
          {flightToDelete && (
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-slate-900">{flightToDelete.flightNumber} — {flightToDelete.origin} → {flightToDelete.destination}</span>
              </div>
              <span className="text-sm text-slate-500">
                {flightToDelete.departureTime ? new Date(flightToDelete.departureTime).toLocaleString() : "—"}
              </span>
            </div>
          )}

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3 items-start">
            <AlertTriangle className="text-amber-600 shrink-0" size={20} />
            <div>
              <p className="text-sm font-bold text-amber-900">Affected bookings: 12 passengers</p>
              <p className="text-xs text-amber-700 mt-0.5 font-medium">All affected passengers will be notified by email.</p>
            </div>
          </div>

          <p className="text-sm text-slate-600 font-medium text-center">
            Are you sure you want to permanently delete this flight? This action cannot be undone.
          </p>

          <div className="flex gap-3 pt-2">
            <Button
              variant="secondary"
              className="flex-1 rounded-xl h-12"
              onClick={() => setDeleteModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-white hover:bg-rose-50 border border-rose-200 text-rose-600 h-12 rounded-xl"
              onClick={handleDeleteConfirm}
              loading={isDeleting}
            >
              Confirm Delete
            </Button>
          </div>
        </div>
      </Modal>
    </AdminLayout>
  );
};

export default AdminFlightsPage;
````

## File: src/pages/admin/AdminPromotionsPage.tsx
````typescript
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getPromotions, createPromotion, deletePromotion } from "@/api/promotions.api";
import AdminLayout from "./_components/AdminLayout";
import DataTable, { type TableColumn } from "@/pages/_shared/components/ui/DataTable";
import Button from "@/pages/_shared/components/ui/Button";
import Modal from "@/pages/_shared/components/ui/Modal";
import Input from "@/pages/_shared/components/ui/Input";
import { Search, Plus, Trash2, Tag, Calendar, Image as ImageIcon, MapPin } from "lucide-react";
import type { Promotion, CreatePromotionPayload } from "@/types/promotion.types";
import { promotionSchema, type PromotionFormValues } from "@/validation/promotion.schemas";
import { cn } from "@/utils/cn";

const AdminPromotionsPage = () => {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PromotionFormValues>({
    resolver: zodResolver(promotionSchema),
    defaultValues: {
      category: "promo",
      image_url: "",
      title: "",
      destination_code: "",
      destination_city: "",
    },
  });

  const fetchPromotions = async () => {
    setIsLoading(true);
    try {
      const data = await getPromotions();
      setPromotions(data);
    } catch (err) {
      console.error("Failed to fetch promotions", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPromotions();
  }, []);

  const onSubmit: SubmitHandler<PromotionFormValues> = async (data) => {
    try {
      await createPromotion(data as CreatePromotionPayload);
      setIsAddModalOpen(false);
      reset();
      fetchPromotions();
    } catch (err) {
      console.error("Failed to create promotion", err);
    }
  };

  const handleDelete = useCallback(async (id: string) => {
    if (!confirm("Are you sure you want to delete this promotion?")) return;
    setIsDeleting(true);
    try {
      await deletePromotion(id);
      fetchPromotions();
    } catch (err) {
      console.error("Failed to delete promotion", err);
    } finally {
      setIsDeleting(false);
    }
  }, []);

  const filteredPromotions = useMemo(() => {
    return promotions.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.destination_code.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [promotions, searchQuery]);

  const columns: TableColumn<Promotion>[] = useMemo(() => [
    {
      key: "title",
      header: "PROMOTION TITLE",
      cell: (row) => (
        <div className="flex items-center gap-3">
          {row.image_url ? (
            <img src={row.image_url} className="size-10 rounded-lg object-cover border border-slate-100" alt="" />
          ) : (
            <div className="size-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
              <ImageIcon size={16} />
            </div>
          )}
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 leading-tight">{row.title}</span>
            <span className="text-[11px] text-slate-500">{row.destination_city}</span>
          </div>
        </div>
      ),
    },
    {
      key: "destination",
      header: "DESTINATION",
      cell: (row) => (
        <div className="flex items-center gap-2 text-[#496B92] font-semibold uppercase">
          <MapPin size={14} />
          {row.destination_code}
        </div>
      ),
    },
    {
      key: "price",
      header: "PRICE",
      cell: (row) => (
        <div className="flex flex-col">
          <span className="text-blue-600 font-bold leading-tight">₱{row.sale_price.toLocaleString()}</span>
          <span className="text-xs text-slate-400 line-through">₱{row.original_price.toLocaleString()}</span>
        </div>
      ),
    },
    {
      key: "category",
      header: "CATEGORY",
      cell: (row) => (
        <span className={cn(
          "px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider",
          row.category === "flash" && "bg-amber-100 text-amber-700",
          row.category === "weekend" && "bg-emerald-100 text-emerald-700",
          row.category === "international" && "bg-purple-100 text-purple-700",
          row.category === "promo" && "bg-blue-100 text-blue-700",
        )}>
          {row.category}
        </span>
      ),
    },
    {
      key: "valid_until",
      header: "VALID UNTIL",
      cell: (row) => (
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Calendar size={14} />
          {new Date(row.valid_until).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </div>
      ),
    },
    {
      key: "actions",
      header: "ACTIONS",
      cell: (row) => (
        <button
          onClick={() => handleDelete(row.id)}
          disabled={isDeleting}
          className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors border border-rose-100 disabled:opacity-50"
        >
          <Trash2 size={16} />
        </button>
      ),
    },
  ], [handleDelete, isDeleting]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Promotions</h2>
            <p className="text-sm font-medium text-slate-500">{filteredPromotions.length} active deals found</p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex flex-row items-center gap-2 bg-[#496B92] hover:bg-[#3B5470] text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-[#496B92]/20 whitespace-nowrap"
          >
            <Plus size={20} className="shrink-0" />
            <span className="text-sm">Add Promotion</span>
          </button>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search promos by title or destination..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 w-full rounded-xl bg-slate-50 pl-10 pr-4 text-sm outline-none border border-transparent focus:border-[#496B92]/20 focus:bg-white focus:ring-2 focus:ring-[#496B92]/10 transition-all"
            />
          </div>
          <div className="flex gap-3">
            <select className="h-11 px-4 rounded-xl bg-slate-50 text-sm font-medium border border-transparent focus:border-[#496B92]/20 outline-none min-w-[140px]">
              <option value="">Category</option>
              <option value="flash">Flash Sale</option>
              <option value="weekend">Weekend</option>
              <option value="international">International</option>
            </select>
            <select className="h-11 px-4 rounded-xl bg-slate-50 text-sm font-medium border border-transparent focus:border-[#496B92]/20 outline-none min-w-[140px]">
              <option value="">Sort By</option>
              <option value="price">Price</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <DataTable
            columns={columns}
            rows={filteredPromotions}
            rowKey={(row) => row.id}
            emptyState={
              <div className="py-20 text-center">
                {isLoading ? (
                  <div className="animate-spin size-8 border-4 border-[#496B92] border-t-transparent rounded-full mx-auto" />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <Tag className="text-slate-300" size={40} />
                    <p className="text-slate-500 font-medium">No promotions found.</p>
                  </div>
                )}
              </div>
            }
          />
          
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-50 bg-slate-50/30">
            <p className="text-sm font-medium text-slate-500">Showing 1-{filteredPromotions.length} of {filteredPromotions.length}</p>
            <div className="flex items-center gap-2">
              <button disabled className="p-2 rounded-lg border border-slate-200 text-slate-400 opacity-50 cursor-not-allowed">
                <Plus size={16} className="rotate-45" />
              </button>
              <button className="size-9 rounded-lg bg-[#496B92] text-white font-bold text-sm">1</button>
              <button disabled className="p-2 rounded-lg border border-slate-200 text-slate-400 opacity-50 cursor-not-allowed">
                <Plus size={16} className="-rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Create New Promotion"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="py-4 space-y-4">
          <Input
            label="Promotion Title *"
            placeholder="e.g. Flash Sale: Manila to Cebu"
            error={errors.title?.message}
            {...register("title")}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Sale Price (₱) *"
              type="number"
              placeholder="0"
              error={errors.sale_price?.message}
              {...register("sale_price", { valueAsNumber: true })}
            />
            <Input
              label="Original Price (₱) *"
              type="number"
              placeholder="0"
              error={errors.original_price?.message}
              {...register("original_price", { valueAsNumber: true })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">Category *</label>
              <select 
                className="w-full h-12 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 transition-all"
                {...register("category")}
              >
                <option value="flash">Flash Sale</option>
                <option value="weekend">Weekend Escape</option>
                <option value="international">International</option>
                <option value="promo">Regular Promo</option>
              </select>
            </div>
            <Input
              label="Destination Code (IATA) *"
              placeholder="e.g. CEB"
              maxLength={3}
              error={errors.destination_code?.message}
              {...register("destination_code")}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Destination City *"
              placeholder="e.g. Cebu City"
              error={errors.destination_city?.message}
              {...register("destination_city")}
            />
            <Input
              label="Valid Until *"
              type="date"
              error={errors.valid_until?.message}
              {...register("valid_until")}
            />
          </div>

          <Input
            label="Background Image URL"
            placeholder="https://images.unsplash.com/..."
            error={errors.image_url?.message}
            {...register("image_url")}
          />

          <div className="flex gap-3 pt-4">
            <Button
              variant="secondary"
              className="flex-1 rounded-xl h-12"
              onClick={() => setIsAddModalOpen(false)}
              type="button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#496B92] hover:bg-[#3B5470] text-white h-12 rounded-xl font-bold"
              loading={isSubmitting}
            >
              Create Promo
            </Button>
          </div>
        </form>
      </Modal>
    </AdminLayout>
  );
};

export default AdminPromotionsPage;
````

## File: src/pages/admin/AdminReportsPage.tsx
````typescript
import AdminLayout from "./_components/AdminLayout";
import { useCallback, useMemo } from "react";
import { generateReport } from "@/api/reports.api";
import type { ReportResult } from "@/types";
import useAsyncValue from "@/hooks/useAsyncValue";

const DEFAULT_REPORT_QUERY = {
  type: "booking_summary" as const,
  filters: {
    datePreset: "this_month" as const,
  },
};

const FALLBACK_REPORT: ReportResult = {
  generatedAt: new Date().toISOString(),
  type: "booking_summary",
  metrics: [
    { label: "Bookings", value: 1842 },
    { label: "Revenue", value: 284500 },
    { label: "Cancelled", value: 18 },
  ],
  rows: [
    { route: "MNL → CEB", bookings: 420, revenue: 836000 },
    { route: "MNL → DVO", bookings: 211, revenue: 491500 },
    { route: "MNL → SIN", bookings: 98, revenue: 734200 },
  ],
};

const AdminReportsPage = () => {
  const loader = useCallback(async () => {
    try {
      return await generateReport(DEFAULT_REPORT_QUERY);
    } catch {
      return FALLBACK_REPORT;
    }
  }, []);

  const { data } = useAsyncValue(loader);

  const report = data ?? FALLBACK_REPORT;
  const columns = useMemo(() => {
    const firstRow = report.rows[0];
    return firstRow ? Object.keys(firstRow) : [];
  }, [report.rows]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Reports</h2>
          <p className="text-sm font-medium text-slate-500">
            Generated {new Date(report.generatedAt).toLocaleString()}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {report.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {metric.value.toLocaleString("en-US")}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-50 bg-slate-50/30 px-6 py-4">
            <h3 className="text-lg font-bold text-slate-900">Report Rows</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100 text-sm">
              <thead className="bg-white">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column}
                      className="px-6 py-3 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {report.rows.map((row, index) => (
                  <tr key={index}>
                    {columns.map((column) => (
                      <td key={column} className="px-6 py-4 text-slate-700">
                        {String(row[column] ?? "—")}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminReportsPage;
````

## File: src/pages/admin/AdminUserDetailPage.tsx
````typescript
import { useCallback, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { getBookingsForUser } from "@/api/bookings.api";
import {
  getUserById,
  toggleUserStatus,
  type UserDetail,
} from "@/api/users.api";
import AdminLayout from "./_components/AdminLayout";
import StatusBadge from "@/pages/_shared/components/ui/StatusBadge";
import DataTable, {
  type TableColumn,
} from "@/pages/_shared/components/ui/DataTable";
import {
  ChevronLeft,
  Mail,
  Phone,
  Calendar,
  Ticket,
  UserCircle,
  Ban,
  Key,
  LogIn,
  UserCog,
  History,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/utils/cn";
import type { Booking } from "@/types";
import useAsyncValue from "@/hooks/useAsyncValue";

const FALLBACK_USER: UserDetail = {
  id: "1",
  email: "marco.gonzales@skylink.ph",
  first_name: "Marco",
  last_name: "Gonzales",
  role_id: 2,
  is_active: true,
  phone_number: "+63 917 000 0000",
  created_at: "2026-04-10T00:00:00Z",
  total_bookings: 4,
};

const AdminUserDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const fallbackUser = useMemo(
    () => ({ ...FALLBACK_USER, id: id ?? FALLBACK_USER.id }),
    [id],
  );

  const loader = useCallback(async () => {
    if (!id) {
      return { user: fallbackUser, bookings: [] as Booking[] };
    }

    try {
      const [userData, bookings] = await Promise.all([
        getUserById(id),
        getBookingsForUser(id),
      ]);

      return {
        user: userData ?? fallbackUser,
        bookings,
      };
    } catch {
      return {
        user: fallbackUser,
        bookings: [],
      };
    }
  }, [fallbackUser, id]);

  const { data, isLoading, refetch } = useAsyncValue(loader);
  const user = data?.user ?? fallbackUser;
  const bookingRows = useMemo(() => {
    const bookings = data?.bookings ?? [];

    if (bookings.length === 0) {
      return [
        {
          id: "1",
          pnr: "AB1234",
          origin: "MNL",
          destination: "CEB",
          flight_number: "PR 2191",
          date: "2026-04-12",
          amount: "₱3,150",
          status: "confirmed",
        },
        {
          id: "2",
          pnr: "CD5678",
          origin: "CEB",
          destination: "MNL",
          flight_number: "PR 2192",
          date: "2026-04-12",
          amount: "₱3,150",
          status: "confirmed",
        },
        {
          id: "3",
          pnr: "EF9012",
          origin: "MNL",
          destination: "DVO",
          flight_number: "5J 800",
          date: "2026-04-12",
          amount: "₱2,250",
          status: "boarded",
        },
        {
          id: "4",
          pnr: "GH3456",
          origin: "MNL",
          destination: "KUL",
          flight_number: "2P 301",
          date: "2026-04-12",
          amount: "₱6,200",
          status: "confirmed",
        },
      ];
    }

    return bookings.map((booking) => ({
      id: booking.id,
      pnr: booking.pnr ?? booking.id.toUpperCase(),
      origin: booking.flight?.origin ?? "MNL",
      destination: booking.flight?.destination ?? "CEB",
      flight_number: booking.flight?.flightNumber ?? "N/A",
      date:
        booking.flight?.departureTime?.split("T")[0] ??
        booking.createdAt.split("T")[0],
      amount: `₱${booking.totalPrice.toLocaleString("en-US")}`,
      status: booking.status,
    }));
  }, [data?.bookings]);

  const handleToggleStatus = async () => {
    if (!user) return;
    try {
      await toggleUserStatus(user.id, !user.is_active);
      void refetch();
    } catch (err) {
      console.error("Failed to toggle status", err);
    }
  };

  const bookingColumns: TableColumn<any>[] = [
    {
      key: "pnr",
      header: "PNR",
      cell: (row) => <span className="font-bold text-blue-600">{row.pnr}</span>,
    },
    {
      key: "route",
      header: "ROUTE",
      cell: (row) => (
        <span className="text-slate-700 font-medium">
          {row.origin} → {row.destination}
        </span>
      ),
    },
    {
      key: "flight",
      header: "FLIGHT",
      cell: (row) => (
        <span className="text-slate-600">{row.flight_number}</span>
      ),
    },
    {
      key: "date",
      header: "DATE",
      cell: (row) => (
        <span className="text-slate-500 whitespace-nowrap">{row.date}</span>
      ),
    },
    {
      key: "amount",
      header: "AMOUNT",
      cell: (row) => (
        <span className="font-bold text-slate-900">{row.amount}</span>
      ),
    },
    {
      key: "status",
      header: "STATUS",
      cell: (row) => <StatusBadge label={row.status} />,
    },
    {
      key: "view",
      header: "",
      cell: (row) => (
        <Link
          to={ROUTES.ADMIN_BOOKING_DETAIL.replace(":id", row.id || "1")}
          className="text-blue-600 font-bold hover:underline text-xs"
        >
          View
        </Link>
      ),
    },
  ];

  const mockTimeline = [
    {
      icon: LogIn,
      title: "Successful login",
      time: "2026-04-11 09:22",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: UserCog,
      title: "Profile updated (phone number changed)",
      time: "2026-04-08 14:35",
      color: "bg-sky-50 text-sky-600",
    },
    {
      icon: Ticket,
      title: "Booking AB1234 created",
      time: "2026-04-03 11:10",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: History,
      title: "Failed login attempt",
      time: "2026-03-28 22:45",
      color: "bg-rose-50 text-rose-600",
    },
  ];

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex min-h-100 items-center justify-center">
          <div className="animate-spin size-10 border-4 border-[#496B92] border-t-transparent rounded-full" />
        </div>
      </AdminLayout>
    );
  }

  if (!user) {
    return (
      <AdminLayout>
        <div className="text-center py-20">
          <p className="text-slate-500">User not found.</p>
          <button
            onClick={() => navigate(ROUTES.ADMIN_USERS)}
            className="text-blue-600 font-bold mt-4"
          >
            Back to Users
          </button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Breadcrumbs & Title */}
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
            <button
              onClick={() => navigate(ROUTES.ADMIN_USERS)}
              className="hover:text-[#496B92] transition-colors"
            >
              Users
            </button>
            <ChevronLeft size={14} className="rotate-180" />
            <span className="text-[#496B92]">
              {user.first_name} {user.last_name}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">User Detail</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <section className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm overflow-hidden">
              <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-[#496B92] text-white font-bold text-2xl mb-4">
                {user.first_name[0]}
                {user.last_name[0]}
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {user.first_name} {user.last_name}
              </h3>
              <div className="mt-2 flex justify-center">
                <StatusBadge
                  label={user.is_active ? "Active" : "Suspended"}
                  tone={user.is_active ? "success" : "danger"}
                />
              </div>

              <div className="mt-8 space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <Mail className="size-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                      Email
                    </p>
                    <p className="text-sm font-medium text-slate-700 mt-1">
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="size-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                      Phone
                    </p>
                    <p className="text-sm font-medium text-slate-700 mt-1">
                      {user.phone_number || "—"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="size-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                      Registered
                    </p>
                    <p className="text-sm font-medium text-slate-700 mt-1">
                      {new Date(user.created_at).toISOString().split("T")[0]}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ticket className="size-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                      Total Bookings
                    </p>
                    <p className="text-sm font-medium text-slate-700 mt-1">
                      {user.total_bookings || 0}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <UserCircle className="size-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                      Role
                    </p>
                    <p className="text-sm font-medium text-slate-700 mt-1">
                      {user.role_id === 1 ? "Administrator" : "Passenger"}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Admin Actions Card */}
            <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm overflow-hidden">
              <h4 className="text-sm font-bold text-slate-900 mb-4">
                Admin Actions
              </h4>
              <div className="space-y-3">
                <button
                  onClick={handleToggleStatus}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold border transition-all",
                    user.is_active
                      ? "text-rose-600 border-rose-100 hover:bg-rose-50"
                      : "text-emerald-600 border-emerald-100 hover:bg-emerald-50",
                  )}
                >
                  {user.is_active ? (
                    <Ban size={18} />
                  ) : (
                    <CheckCircle size={18} />
                  )}
                  {user.is_active ? "Suspend Account" : "Reactivate Account"}
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold border border-blue-100 text-blue-600 hover:bg-blue-50 transition-all">
                  <Key size={18} />
                  Reset Password
                </button>
              </div>
            </section>

            {/* Activity Timeline */}
            <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm overflow-hidden">
              <h4 className="text-sm font-bold text-slate-900 mb-6">
                Activity Timeline
              </h4>
              <div className="space-y-6">
                {mockTimeline.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div
                      className={cn(
                        "size-10 shrink-0 rounded-xl flex items-center justify-center shadow-sm",
                        item.color,
                      )}
                    >
                      <item.icon size={20} />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-[13px] font-bold text-slate-700 leading-snug">
                        {item.title}
                      </p>
                      <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Booking History */}
          <div className="lg:col-span-2">
            <section className="min-h-full rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
              <div className="px-8 py-6 border-b border-slate-50 bg-slate-50/30 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900">
                  Booking History
                </h3>
              </div>
              <div className="p-2">
                <DataTable
                  columns={bookingColumns}
                  rows={bookingRows}
                  rowKey={(row) => row.pnr}
                  emptyState={
                    <div className="py-20 text-center">
                      <p className="text-slate-500 font-medium">
                        No bookings found for this user.
                      </p>
                    </div>
                  }
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUserDetailPage;
````

## File: src/pages/admin/AdminUsersPage.tsx
````typescript
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { getUsers, toggleUserStatus, type UserListItem } from "@/api/users.api";
import AdminLayout from "./_components/AdminLayout";
import DataTable, { type TableColumn } from "@/pages/_shared/components/ui/DataTable";
import StatusBadge from "@/pages/_shared/components/ui/StatusBadge";
import { Search, Eye, Ban, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";

const AdminUsersPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleToggleStatus = async (user: UserListItem) => {
    try {
      await toggleUserStatus(user.id, !user.is_active);
      fetchUsers();
    } catch (err) {
      console.error("Failed to toggle status", err);
    }
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      // Exclude administrators (role_id: 1) from the management list
      if (user.role_id === 1) return false;

      const full_name = `${user.first_name} ${user.last_name}`.toLowerCase();
      const query = searchQuery.toLowerCase();
      return (
        full_name.includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.id.toLowerCase().includes(query)
      );
    });
  }, [users, searchQuery]);

  const columns: TableColumn<UserListItem>[] = [
    {
      key: "id",
      header: "ID",
      cell: (row) => <span className="text-slate-400 font-medium text-xs uppercase">U{row.id.slice(0, 4)}</span>,
    },
    {
      key: "name",
      header: "FULL NAME",
      cell: (row) => (
        <div className="flex items-center gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#496B92]/10 text-[#496B92] font-bold text-xs">
            {row.first_name[0]}{row.last_name[0]}
          </div>
          <span className="font-bold text-slate-900">{row.first_name} {row.last_name}</span>
        </div>
      ),
    },
    {
      key: "email",
      header: "EMAIL",
      cell: (row) => <span className="text-slate-600 font-medium">{row.email}</span>,
    },
    {
      key: "registered",
      header: "REGISTERED",
      cell: (row) => <span className="text-slate-500">{new Date(row.created_at).toISOString().split('T')[0]}</span>,
    },
    {
      key: "bookings",
      header: "BOOKINGS",
      cell: (row) => <span className="text-slate-700 font-bold ml-4">{row.bookings_count || 0}</span>,
    },
    {
      key: "status",
      header: "STATUS",
      cell: (row) => (
        <StatusBadge 
          label={row.is_active ? "Active" : "Suspended"} 
          tone={row.is_active ? "success" : "danger"}
        />
      ),
    },
    {
      key: "actions",
      header: "ACTIONS",
      cell: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(ROUTES.ADMIN_USER_PROFILE.replace(":id", row.id))}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-blue-100"
            title="View Detail"
          >
            <Eye size={16} />
          </button>
          <button
            onClick={() => handleToggleStatus(row)}
            className={cn(
              "p-2 rounded-lg transition-colors border",
              row.is_active 
                ? "text-rose-600 hover:bg-rose-50 border-rose-100" 
                : "text-emerald-600 hover:bg-emerald-50 border-emerald-100"
            )}
            title={row.is_active ? "Suspend User" : "Activate User"}
          >
            {row.is_active ? <Ban size={16} /> : <CheckCircle size={16} />}
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Users</h2>
          <p className="text-sm font-medium text-slate-500">{filteredUsers.length} users found</p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-11 w-full rounded-xl bg-white border border-slate-100 pl-10 pr-4 text-sm outline-none focus:border-[#496B92]/20 focus:ring-2 focus:ring-[#496B92]/10 transition-all shadow-sm"
          />
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <DataTable
            columns={columns}
            rows={filteredUsers}
            rowKey={(row) => row.id}
            emptyState={
              <div className="py-20 text-center">
                {isLoading ? (
                  <div className="animate-spin size-8 border-4 border-[#496B92] border-t-transparent rounded-full mx-auto" />
                ) : (
                  <p className="text-slate-500 font-medium">No users found.</p>
                )}
              </div>
            }
          />

          {/* Pagination Placeholder */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-50 bg-slate-50/30">
            <p className="text-sm font-medium text-slate-500">Showing 1-{filteredUsers.length} of {filteredUsers.length}</p>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-colors" disabled>
                <ChevronLeft size={18} />
              </button>
              <button className="size-9 rounded-lg bg-[#496B92] text-white font-bold text-sm">1</button>
              <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-colors" disabled>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUsersPage;
````

## File: src/pages/BookingPagesFolder/BookingConfirmationPage/BookingConfirmationPage.tsx
````typescript
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Copy, Download } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import {
  BOOKING_DATA,
  loadBookingData,
} from "@/pages/BookingPagesFolder/bookingData";
import useAsyncValue from "@/hooks/useAsyncValue";

const BookingConfirmationPage = () => {
  const [copied, setCopied] = useState(false);
  const { data: bookingData } = useAsyncValue(loadBookingData);
  const booking = bookingData ?? BOOKING_DATA;
  const meal = booking.meal ?? "Standard Meal";

  const handleCopy = async () => {
    if (!navigator.clipboard?.writeText) {
      return;
    }

    try {
      await navigator.clipboard.writeText(booking.pnr);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7] px-4 py-12 sm:px-6">
      <section className="mx-auto w-full max-w-3xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-slate-800">
          Booking Confirmed!
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Your booking is confirmed. A confirmation email has been sent to your
          inbox.
        </p>
        <p className="mt-3 text-xs font-semibold text-rose-500">
          Fully refundable if canceled within 24 hours of booking;
          non-refundable thereafter.
        </p>

        <div className="mx-auto mt-6 w-full rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Booking Reference (PNR)
          </p>
          <p className="mt-3 text-2xl font-semibold tracking-[0.2em] text-[#5D7FA7] sm:text-3xl sm:tracking-[0.3em]">
            {booking.pnr}
          </p>
          <button
            type="button"
            onClick={handleCopy}
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#EDF2F8] px-3 py-1 text-xs font-semibold text-[#5D7FA7] hover:bg-[#E1E8F2]"
          >
            <Copy className="h-3.5 w-3.5" />
            {copied ? "Copied" : "Copy PNR"}
          </button>
        </div>

        <div className="mt-6 space-y-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm">
            <p className="text-sm font-semibold text-slate-700">
              Flight Details
            </p>
            <div className="mt-4 grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
              <div>
                <p className="text-2xl font-semibold text-slate-800">
                  {booking.fromCode}
                </p>
                <p className="text-sm font-semibold text-[#5D7FA7]">
                  {booking.departTime}
                </p>
              </div>
              <div className="text-center text-xs text-slate-400">
                <p>{booking.duration}</p>
                <div className="mx-auto mt-1 h-0.5 w-12 rounded-full bg-slate-200" />
                <p className="mt-1 text-[11px] text-emerald-600">Non-stop</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-2xl font-semibold text-slate-800">
                  {booking.toCode}
                </p>
                <p className="text-sm font-semibold text-[#5D7FA7]">
                  {booking.arriveTime}
                </p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500 sm:grid-cols-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Flight
                </p>
                <p className="mt-1 font-semibold text-slate-700">
                  {booking.flightCode}
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Class
                </p>
                <p className="mt-1 font-semibold text-slate-700">
                  {booking.cabin}
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Seat
                </p>
                <p className="mt-1 font-semibold text-slate-700">
                  {booking.seat}
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Meal
                </p>
                <p className="mt-1 font-semibold text-slate-700">{meal}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm">
            <p className="text-xs font-semibold text-slate-400">Passenger</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">
              {booking.passengerName}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#5D7FA7] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4E6B8D] sm:w-auto"
          >
            <Download className="h-4 w-4" />
            Download E-ticket
          </button>
          <Link
            to={ROUTES.MANAGE}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#AFC2DD] px-6 py-2.5 text-sm font-semibold text-[#5D7FA7] hover:border-[#8EA7CB] sm:w-auto"
          >
            View My Booking
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BookingConfirmationPage;
````

## File: src/pages/BookingPagesFolder/BookingSummaryPage/BookingSummaryPage.tsx
````typescript
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import BookingStepper from "@/pages/BookingPagesFolder/components/BookingStepper";
import {
  BOOKING_DATA,
  loadBookingData,
  formatCurrency,
} from "@/pages/BookingPagesFolder/bookingData";
import useAsyncValue from "@/hooks/useAsyncValue";

type LocationState = {
  seat?: string;
};

const BookingSummaryPage = () => {
  const location = useLocation();
  const searchSuffix = location.search ?? "";
  const backHref = `${ROUTES.BOOKING_SEAT_SELECTION}${searchSuffix}`;
  const locationState = location.state as LocationState | null;
  const { data: bookingData } = useAsyncValue(loadBookingData);
  const booking = bookingData ?? BOOKING_DATA;
  const seatLabel = locationState?.seat ?? booking.seat;
  const baseFare = formatCurrency(booking.baseFare);
  const taxes = formatCurrency(booking.taxes);
  const total = formatCurrency(booking.total);

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7]">
      <section className="mx-auto w-full max-w-6xl px-6 py-6">
        <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
          <Link
            to={backHref}
            className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-700"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Link>
        </div>

        <BookingStepper activeId={4} searchSuffix={searchSuffix} />

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Flight
                  </p>
                  <h2 className="mt-1 text-sm font-semibold text-slate-800">
                    {booking.fromCode} {"->"} {booking.toCode}
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    {booking.flightCode} {" - "}
                    {booking.departTime} {"->"} {booking.arriveTime}
                    {" - "}
                    {booking.duration}
                  </p>
                  <p className="text-xs text-slate-500">
                    {booking.cabin} {" - "} {booking.baggage}
                  </p>
                </div>
                <Link
                  to={`${ROUTES.SEARCH_RESULTS}${searchSuffix}`}
                  className="text-xs font-semibold text-[#5D7FA7] hover:text-[#4E6B8D]"
                >
                  Edit
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Passenger
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-800">
                    {BOOKING_DATA.passengerName}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {BOOKING_DATA.passengerNationality}
                  </p>
                  <p className="text-xs text-slate-500">
                    ID: {BOOKING_DATA.passengerId}
                  </p>
                </div>
                <Link
                  to={`${ROUTES.BOOKING_PASSENGER_DETAILS}${searchSuffix}`}
                  className="text-xs font-semibold text-[#5D7FA7] hover:text-[#4E6B8D]"
                >
                  Edit
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Seat
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-800">
                    {seatLabel}
                  </h3>
                </div>
                <Link
                  to={`${ROUTES.BOOKING_SEAT_SELECTION}${searchSuffix}`}
                  className="text-xs font-semibold text-[#5D7FA7] hover:text-[#4E6B8D]"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800">
              Price Breakdown
            </h3>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Flight fare</span>
                <span>{baseFare}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Taxes & fees</span>
                <span>{taxes}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
              <span className="text-sm font-semibold text-slate-800">
                Total
              </span>
              <span className="text-lg font-semibold text-[#5D7FA7]">
                {total}
              </span>
            </div>

            <Link
              to={`${ROUTES.PAYMENT}${searchSuffix}`}
              className="mt-4 flex w-full items-center justify-center rounded-lg bg-[#5D7FA7] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4E6B8D]"
            >
              Proceed to Payment
            </Link>
            <p className="mt-3 text-[11px] text-slate-400">
              By proceeding to payment, you agree to SkyLink's Terms of Service
              and Privacy Policy.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default BookingSummaryPage;
````

## File: src/pages/BookingPagesFolder/components/BookingStepper.tsx
````typescript
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

type Step = {
  id: number;
  label: string;
  href: string;
};

const STEPS: Step[] = [
  { id: 1, label: "Passenger Details", href: ROUTES.BOOKING_PASSENGER_DETAILS },
  { id: 2, label: "Seat Selection", href: ROUTES.BOOKING_SEAT_SELECTION },
  { id: 4, label: "Booking Summary", href: ROUTES.BOOKING_SUMMARY },
];

type BookingStepperProps = {
  activeId: number;
  searchSuffix?: string;
};

const BookingStepper = ({
  activeId,
  searchSuffix = "",
}: BookingStepperProps) => {
  const activeIndex = Math.max(
    0,
    STEPS.findIndex((step) => step.id === activeId),
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs shadow-sm">
      {STEPS.map((step, index) => {
        const isCompleted = index < activeIndex;
        const isActive = index === activeIndex;
        const circleBase =
          "flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold";
        const circleClass = isCompleted
          ? "border-[#5D7FA7] bg-[#5D7FA7] text-white"
          : isActive
            ? "border-[#5D7FA7] text-[#5D7FA7]"
            : "border-slate-300 text-slate-400";
        const labelClass = isActive
          ? "text-slate-700 font-semibold"
          : isCompleted
            ? "text-slate-600"
            : "text-slate-400";
        const stepContent = (
          <div className="flex items-center gap-2">
            <span className={`${circleBase} ${circleClass}`}>
              {isCompleted ? <Check className="h-3.5 w-3.5" /> : step.id}
            </span>
            <span className={`text-xs ${labelClass}`}>{step.label}</span>
          </div>
        );

        return (
          <div key={step.id} className="flex items-center gap-3">
            {isCompleted ? (
              <Link
                to={`${step.href}${searchSuffix}`}
                className="hover:text-slate-700"
              >
                {stepContent}
              </Link>
            ) : (
              <div>{stepContent}</div>
            )}
            {index < STEPS.length - 1 ? (
              <span className="hidden h-px w-10 bg-slate-200 sm:block" />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default BookingStepper;
````

## File: src/pages/BookingPagesFolder/PassengerDetailsPage/PassengerDetailsPage.tsx
````typescript
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, Info, User } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import BookingStepper from "@/pages/BookingPagesFolder/components/BookingStepper";
import {
  BOOKING_DATA,
  loadBookingData,
  formatCurrency,
} from "@/pages/BookingPagesFolder/bookingData";
import useAsyncValue from "@/hooks/useAsyncValue";

const PassengerDetailsPage = () => {
  const location = useLocation();
  const searchSuffix = location.search ?? "";
  const seatSelectionHref = `${ROUTES.BOOKING_SEAT_SELECTION}${searchSuffix}`;
  const backHref = `${ROUTES.SEARCH_RESULTS}${searchSuffix}`;
  const { data: bookingData } = useAsyncValue(loadBookingData);
  const booking = bookingData ?? BOOKING_DATA;
  const baseFare = formatCurrency(booking.baseFare);
  const taxes = formatCurrency(booking.taxes);
  const total = formatCurrency(booking.total);
  const inputClass =
    "mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:border-[#5D7FA7] focus:outline-none focus:ring-2 focus:ring-[#5D7FA7]/20";

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7]">
      <section className="mx-auto w-full max-w-6xl px-6 py-6">
        <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
          <Link
            to={backHref}
            className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-700"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Link>
        </div>

        <BookingStepper activeId={1} searchSuffix={searchSuffix} />

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF0F7] text-[#5D7FA7]">
                <User className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Passenger Details
                </p>
                <h2 className="text-sm font-semibold text-slate-800">
                  Passenger Details
                </h2>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-slate-600">
                  First Name *
                </label>
                <input
                  className={inputClass}
                  defaultValue="Marco"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Last Name *
                </label>
                <input
                  className={inputClass}
                  defaultValue="Gonzales"
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Date of Birth *
                </label>
                <input className={inputClass} placeholder="MM / DD / YYYY" />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Nationality *
                </label>
                <input
                  className={inputClass}
                  defaultValue="Filipino"
                  placeholder="Nationality"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-slate-600">
                  Passport / ID Number *
                </label>
                <input
                  className={inputClass}
                  defaultValue={booking.passengerId}
                  placeholder="Enter passport or ID number"
                />
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2 rounded-lg bg-slate-50 p-3 text-xs text-slate-500">
              <Info className="mt-0.5 h-4 w-4 text-slate-400" />
              <span>
                Please ensure passenger details match exactly as written in the
                official ID or passport.
              </span>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Your Booking
            </h3>
            <div className="mt-3 rounded-xl bg-slate-50 p-4">
              <p className="text-[11px] font-semibold text-slate-400">Flight</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-800">
                  {booking.fromCode} {"->"} {booking.toCode}
                </span>
                <span className="text-[11px] text-slate-400">
                  {booking.flightCode}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                {booking.departTime} {"->"} {booking.arriveTime}
                {" - "}
                {booking.duration}
              </p>
              <p className="text-xs text-slate-500">
                {booking.cabin} {" - "} {booking.baggage}
              </p>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Base fare</span>
                <span>{baseFare}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Taxes & fees</span>
                <span>{taxes}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
              <span className="text-sm font-semibold text-slate-800">
                Total
              </span>
              <span className="text-lg font-semibold text-[#5D7FA7]">
                {total}
              </span>
            </div>

            <Link
              to={seatSelectionHref}
              className="mt-4 flex w-full items-center justify-center rounded-lg bg-[#5D7FA7] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4E6B8D]"
            >
              Continue to Seat Selection
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default PassengerDetailsPage;
````

## File: src/pages/BookingPagesFolder/PaymentPage/PaymentPage.tsx
````typescript
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, Lock } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import BookingStepper from "@/pages/BookingPagesFolder/components/BookingStepper";
import {
  BOOKING_DATA,
  loadBookingData,
  formatCurrency,
} from "@/pages/BookingPagesFolder/bookingData";
import useAsyncValue from "@/hooks/useAsyncValue";

type PaymentMethod = "card" | "gcash" | "paypal" | "bank";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchSuffix = location.search ?? "";
  const backHref = `${ROUTES.BOOKING_SUMMARY}${searchSuffix}`;
  const [method, setMethod] = useState<PaymentMethod>("card");
  const { data: bookingData } = useAsyncValue(loadBookingData);
  const booking = bookingData ?? BOOKING_DATA;
  const total = formatCurrency(booking.total);

  const handlePay = () => {
    navigate(`${ROUTES.PAYMENT_OTP}${searchSuffix}`, {
      state: { method },
    });
  };

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7]">
      <section className="mx-auto w-full max-w-6xl px-6 py-6">
        <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
          <Link
            to={backHref}
            className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-700"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Link>
        </div>

        <BookingStepper activeId={4} searchSuffix={searchSuffix} />

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-3 text-xs">
              {[
                { id: "card", label: "Credit / Debit Card" },
                { id: "gcash", label: "GCash" },
                { id: "paypal", label: "PayPal" },
                { id: "bank", label: "Bank Transfer" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setMethod(tab.id as PaymentMethod)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                    method === tab.id
                      ? "bg-[#5D7FA7] text-white"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {method === "card" ? (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-600">
                    Card Number *
                  </label>
                  <input
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-600">
                    Cardholder Name *
                  </label>
                  <input
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                    placeholder="AS WRITTEN ON CARD"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600">
                    Expiry *
                  </label>
                  <input
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                    placeholder="MM / YY"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600">
                    CVV *
                  </label>
                  <input
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                    placeholder="***"
                  />
                </div>
                <div className="sm:col-span-2 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500">
                  <Lock className="h-4 w-4 text-slate-400" />
                  Your payment is secured with 256-bit SSL encryption.
                </div>
              </div>
            ) : (
              <div className="mt-6 rounded-lg border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
                You will be redirected to complete this payment method once you
                continue.
              </div>
            )}
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800">
              Order Total
            </h3>
            <p className="mt-2 text-xs text-slate-500">
              {booking.flightCode} fare
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
              <span className="text-sm font-semibold text-slate-800">
                Total
              </span>
              <span className="text-lg font-semibold text-[#5D7FA7]">
                {total}
              </span>
            </div>
            <button
              type="button"
              onClick={handlePay}
              className="mt-4 w-full rounded-lg bg-[#5D7FA7] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4E6B8D]"
            >
              Pay Now - {total}
            </button>
            <p className="mt-2 text-[11px] text-slate-400">
              By paying, you agree to our Terms of Service.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default PaymentPage;
````

## File: src/pages/BookingPagesFolder/PaymentProcessingPage/PaymentProcessingPage.tsx
````typescript
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Plane } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import {
  BOOKING_DATA,
  loadBookingData,
} from "@/pages/BookingPagesFolder/bookingData";
import useAsyncValue from "@/hooks/useAsyncValue";

const PaymentProcessingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchSuffix = location.search ?? "";
  const { data: bookingData } = useAsyncValue(loadBookingData);
  const booking = bookingData ?? BOOKING_DATA;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigate(`${ROUTES.BOOKING_CONFIRMATION}${searchSuffix}`);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, [navigate, searchSuffix]);

  return (
    <main className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-[#F3F5F7] px-6 py-16">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 rounded-full border-2 border-slate-200" />
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-[#5D7FA7] border-t-transparent" />
            <Plane className="absolute inset-0 m-auto h-4 w-4 text-[#5D7FA7]" />
          </div>
        </div>
        <h2 className="mt-4 text-lg font-semibold text-slate-800">
          Processing Your Payment
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Please wait while we securely process your payment.
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Do not close or refresh this page.
        </p>

        <div className="mx-auto mt-6 w-full max-w-xs rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Booking
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-800">
            {booking.fromCode} {"->"} {booking.toCode}
          </p>
          <p className="text-xs text-slate-500">{booking.flightCode}</p>
        </div>
      </div>
    </main>
  );
};

export default PaymentProcessingPage;
````

## File: src/pages/BookingPagesFolder/SeatSelectionPage/SeatSelectionPage.tsx
````typescript
import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Check, ChevronLeft, Plane } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import BookingStepper from "@/pages/BookingPagesFolder/components/BookingStepper";
import {
  BOOKING_DATA,
  loadBookingData,
} from "@/pages/BookingPagesFolder/bookingData";
import useAsyncValue from "@/hooks/useAsyncValue";

const SeatSelectionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchSuffix = location.search ?? "";
  const backHref = `${ROUTES.BOOKING_PASSENGER_DETAILS}${searchSuffix}`;
  const { data: bookingData } = useAsyncValue(loadBookingData);
  const booking = bookingData ?? BOOKING_DATA;
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const rows = useMemo(() => Array.from({ length: 11 }, (_, i) => i + 1), []);
  const columns = ["A", "B", "C", "D", "E", "F"];
  const occupiedSeats = useMemo(
    () => new Set(["2B", "3A", "3C", "4D", "6B", "7A", "9E", "10C"]),
    [],
  );

  const handleContinue = () => {
    const seat = selectedSeat ?? "Auto-assign";
    navigate(`${ROUTES.BOOKING_SUMMARY}${searchSuffix}`, {
      state: { seat },
    });
  };

  const handleSkip = () => {
    navigate(`${ROUTES.BOOKING_SUMMARY}${searchSuffix}`, {
      state: { seat: "Auto-assign" },
    });
  };

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7]">
      <section className="mx-auto w-full max-w-6xl px-6 py-6">
        <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
          <Link
            to={backHref}
            className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-700"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Link>
        </div>

        <BookingStepper activeId={2} searchSuffix={searchSuffix} />

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-sm font-semibold text-slate-800">
                  Select Your Seat
                </h2>
                <p className="text-xs text-slate-500">
                  Airbus A320 - {booking.flightCode}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded border border-slate-300 bg-white" />
                  Available
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded border border-amber-200 bg-amber-50" />
                  Premium (+PHP 500)
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded border border-[#5D7FA7] bg-[#5D7FA7]" />
                  Selected
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded border border-slate-200 bg-slate-200" />
                  Occupied
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <Plane className="h-4 w-4" />
                Front of aircraft
              </div>

              <div className="mt-4 flex justify-center">
                <div className="space-y-2">
                  {rows.map((row) => (
                    <div
                      key={row}
                      className="grid grid-cols-[24px_repeat(3,32px)_24px_repeat(3,32px)] items-center gap-2"
                    >
                      <div className="text-[11px] text-slate-400">{row}</div>
                      {columns.slice(0, 3).map((col) => {
                        const seatId = `${row}${col}`;
                        const isPremium = row <= 2;
                        const isOccupied = occupiedSeats.has(seatId);
                        const isSelected = selectedSeat === seatId;
                        const baseClass =
                          "flex h-8 w-8 items-center justify-center rounded border text-[10px] font-semibold transition";
                        const stateClass = isOccupied
                          ? "border-slate-200 bg-slate-200 text-slate-400 cursor-not-allowed"
                          : isSelected
                            ? "border-[#5D7FA7] bg-[#5D7FA7] text-white"
                            : isPremium
                              ? "border-amber-200 bg-amber-50 text-amber-600 hover:border-amber-300"
                              : "border-slate-200 bg-white text-slate-500 hover:border-slate-300";
                        return (
                          <button
                            key={seatId}
                            type="button"
                            className={`${baseClass} ${stateClass}`}
                            disabled={isOccupied}
                            onClick={() =>
                              setSelectedSeat((current) =>
                                current === seatId ? null : seatId,
                              )
                            }
                            aria-label={`Seat ${seatId}`}
                          >
                            {isSelected ? <Check className="h-3 w-3" /> : col}
                          </button>
                        );
                      })}
                      <div />
                      {columns.slice(3).map((col) => {
                        const seatId = `${row}${col}`;
                        const isPremium = row <= 2;
                        const isOccupied = occupiedSeats.has(seatId);
                        const isSelected = selectedSeat === seatId;
                        const baseClass =
                          "flex h-8 w-8 items-center justify-center rounded border text-[10px] font-semibold transition";
                        const stateClass = isOccupied
                          ? "border-slate-200 bg-slate-200 text-slate-400 cursor-not-allowed"
                          : isSelected
                            ? "border-[#5D7FA7] bg-[#5D7FA7] text-white"
                            : isPremium
                              ? "border-amber-200 bg-amber-50 text-amber-600 hover:border-amber-300"
                              : "border-slate-200 bg-white text-slate-500 hover:border-slate-300";
                        return (
                          <button
                            key={seatId}
                            type="button"
                            className={`${baseClass} ${stateClass}`}
                            disabled={isOccupied}
                            onClick={() =>
                              setSelectedSeat((current) =>
                                current === seatId ? null : seatId,
                              )
                            }
                            aria-label={`Seat ${seatId}`}
                          >
                            {isSelected ? <Check className="h-3 w-3" /> : col}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800">
              Seat Selection
            </h3>
            <div
              className={`mt-3 rounded-lg border p-3 text-xs ${
                selectedSeat
                  ? "border-slate-200 bg-white text-slate-500"
                  : "border-amber-100 bg-amber-50 text-slate-500"
              }`}
            >
              {selectedSeat ? (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Selected seat</span>
                  <span className="font-semibold text-slate-800">
                    {selectedSeat}
                  </span>
                </div>
              ) : (
                <p>
                  No seat selected yet. You can skip and get an auto-assigned
                  seat.
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={handleContinue}
              disabled={!selectedSeat}
              className="mt-4 w-full rounded-lg bg-[#5D7FA7] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4E6B8D] disabled:cursor-not-allowed disabled:opacity-60"
            >
              Continue
            </button>
            <button
              type="button"
              onClick={handleSkip}
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:border-slate-300"
            >
              Skip (Auto-assign)
            </button>
            <p className="mt-3 text-[11px] text-slate-400">
              Seats are held for 15 minutes. Complete your booking before time
              runs out.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default SeatSelectionPage;
````

## File: src/pages/BookingPagesFolder/bookingData.ts
````typescript
export const BOOKING_DATA = {
  flightCode: "",
  fromCode: "",
  toCode: "",
  departTime: "",
  arriveTime: "",
  duration: "",
  cabin: "",
  baggage: "",
  meal: "",
  passengerName: "",
  passengerNationality: "",
  passengerId: "",
  seat: "",
  pnr: "",
  baseFare: 0,
  taxes: 0,
  total: 0,
};

export type BookingData = typeof BOOKING_DATA;

export const loadBookingData = async (): Promise<BookingData> => BOOKING_DATA;

export const formatCurrency = (value: number) =>
  `PHP ${value.toLocaleString("en-US")}`;
````

## File: src/pages/BookingResultPagesFolder/ResultsBookingPage/components/AuthGateModal.tsx
````typescript
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

type AuthGateModalProps = {
  open: boolean;
  onClose: () => void;
  continueTo?: string;
};

const AuthGateModal = ({ open, onClose, continueTo }: AuthGateModalProps) => {
  if (!open) {
    return null;
  }

  const guestLink = continueTo ?? ROUTES.BOOKING_PASSENGER_DETAILS;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
            aria-label="Close"
          >
            x
          </button>
        </div>
        <h3 className="text-base font-semibold text-slate-900">
          Ready to Book?
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          Sign in to save your booking to your account, or continue as a guest.
        </p>

        <div className="mt-5 space-y-2">
          <Link
            to={ROUTES.LOGIN}
            className="block w-full rounded-lg bg-[#5D7FA7] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4E6B8D]"
          >
            Sign In
          </Link>
          <Link
            to={guestLink}
            className="block w-full rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:border-slate-300"
          >
            Continue as Guest
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthGateModal;
````

## File: src/pages/BookingResultPagesFolder/ResultsBookingPage/components/FareRulesCard.tsx
````typescript
export type FareRule = {
  label: string;
  value: string;
};

const FareRulesCard = ({ rules }: { rules: FareRule[] }) => {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900">Fare Rules</h3>
        <span className="text-xs text-slate-400">Updated</span>
      </div>

      <div className="mt-4 divide-y divide-slate-100">
        {rules.map((rule) => (
          <div key={rule.label} className="flex gap-6 py-3 text-sm">
            <span className="w-28 text-slate-500">{rule.label}</span>
            <span className="text-slate-700">{rule.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FareRulesCard;
````

## File: src/pages/BookingResultPagesFolder/ResultsBookingPage/components/FlightDetailCard.tsx
````typescript
import { CheckCircle2, Clock, Plane, Wifi, Luggage } from "lucide-react";

export type FlightDetail = {
  id: string;
  airline: string;
  airlineCode: string;
  flightNo: string;
  aircraft: string;
  fromCode: string;
  toCode: string;
  departTime: string;
  arriveTime: string;
  duration: string;
  status: string;
  baggage: string;
  cabin: string;
};

const FlightDetailCard = ({ flight }: { flight: FlightDetail }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5D7FA7] text-sm font-semibold text-white">
            {flight.airlineCode}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {flight.airline}
            </p>
            <p className="text-xs text-slate-500">
              {flight.flightNo} | {flight.aircraft}
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          <CheckCircle2 size={14} />
          {flight.status}
        </span>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto_1fr]">
        <div>
          <p className="text-2xl font-semibold text-slate-900">
            {flight.fromCode}
          </p>
          <p className="text-sm font-semibold text-slate-700">
            {flight.departTime}
          </p>
          <p className="text-xs text-slate-500">MNL Airport</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-xs text-slate-500">{flight.duration}</p>
          <Plane size={16} className="text-emerald-600" />
          <p className="text-xs font-semibold text-emerald-600">Non-stop</p>
        </div>

        <div className="text-right">
          <p className="text-2xl font-semibold text-slate-900">
            {flight.toCode}
          </p>
          <p className="text-sm font-semibold text-slate-700">
            {flight.arriveTime}
          </p>
          <p className="text-xs text-slate-500">CEB Airport</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
          <Luggage size={12} /> {flight.baggage} baggage
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
          <Wifi size={12} /> Wi-Fi onboard
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
          <Clock size={12} /> {flight.duration}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#EAF1F8] px-3 py-1 text-[#5D7FA7]">
          {flight.cabin}
        </span>
      </div>
    </section>
  );
};

export default FlightDetailCard;
````

## File: src/pages/BookingResultPagesFolder/ResultsBookingPage/components/PriceSummaryCard.tsx
````typescript
type PriceSummaryCardProps = {
  cabin: string;
  baseFare: string;
  taxes: string;
  total: string;
  onBook: () => void;
};

const PriceSummaryCard = ({
  cabin,
  baseFare,
  taxes,
  total,
  onBook,
}: PriceSummaryCardProps) => {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">Price Summary</h3>
      <p className="mt-1 text-xs text-slate-500">Per passenger | {cabin}</p>

      <div className="mt-4 space-y-2 text-sm text-slate-600">
        <div className="flex items-center justify-between">
          <span>Base Fare</span>
          <span>{baseFare}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Taxes & Fees</span>
          <span>{taxes}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="text-sm font-semibold text-slate-900">Total</span>
        <span className="text-lg font-semibold text-[#5D7FA7]">{total}</span>
      </div>

      <button
        type="button"
        onClick={onBook}
        className="mt-4 w-full rounded-lg bg-[#5D7FA7] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4E6B8D]"
      >
        Book This Flight - {total}
      </button>
      <p className="mt-2 text-[11px] text-slate-400">
        No payment yet - review before paying
      </p>
    </aside>
  );
};

export default PriceSummaryCard;
````

## File: src/pages/BookingResultPagesFolder/ResultsBookingPage/ResultsBookingPage.tsx
````typescript
import { useCallback, useMemo, useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import useAuth from "@/hooks/useAuth";
import FlightDetailCard, {
  type FlightDetail,
} from "./components/FlightDetailCard";
import PriceSummaryCard from "./components/PriceSummaryCard";
import FareRulesCard, { type FareRule } from "./components/FareRulesCard";
import AuthGateModal from "./components/AuthGateModal";
import { searchFlights } from "@/api/flights.api";
import type { Flight } from "@/types";
import useAsyncValue from "@/hooks/useAsyncValue";

type FlightSummary = FlightDetail & {
  price: string;
  seatsLeft?: number;
};

const FARE_RULES: FareRule[] = [
  {
    label: "Cancellation",
    value:
      "Fully refundable if canceled within 24 hours of booking; non-refundable thereafter.",
  },
  {
    label: "Date Change",
    value: "PHP 750 fee + fare difference",
  },
  {
    label: "Name Change",
    value: "Not permitted",
  },
  {
    label: "Baggage",
    value: "20kg checked baggage included",
  },
  {
    label: "Seat Selection",
    value: "Free standard seat; premium seat with fee",
  },
  {
    label: "Meal",
    value: "Standard meal included on flights over 2 hours",
  },
];

type LocationState = {
  flight?: FlightSummary;
};

function mapFlightToSummary(flight: Flight): FlightSummary {
  const departure = new Date(flight.departureTime);
  const arrival = new Date(flight.arrivalTime);
  const totalMinutes =
    Number.isNaN(departure.getTime()) || Number.isNaN(arrival.getTime())
      ? 80
      : Math.max(
          Math.round((arrival.getTime() - departure.getTime()) / 60000),
          60,
        );
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const summary: FlightSummary = {
    id: flight.id,
    airline: flight.airline ?? "SkyLink",
    airlineCode: (flight.airline ?? "SK").slice(0, 2).toUpperCase(),
    flightNo: flight.flightNumber,
    aircraft: flight.cabinClass === "business" ? "Airbus A321" : "Airbus A320",
    fromCode: flight.origin,
    toCode: flight.destination,
    departTime: departure.toISOString().slice(11, 16),
    arriveTime: arrival.toISOString().slice(11, 16),
    duration: `${hours}h ${minutes.toString().padStart(2, "0")}m`,
    status:
      flight.status === "on_time"
        ? "On Time"
        : flight.status === "boarding"
          ? "Boarding"
          : flight.status === "delayed"
            ? "Delayed"
            : flight.status === "cancelled"
              ? "Cancelled"
              : "Scheduled",
    baggage: `${flight.baggageAllowanceKg ?? 20}kg`,
    cabin:
      flight.cabinClass === "business"
        ? "Business"
        : flight.cabinClass === "first"
          ? "First"
          : "Economy",
    price: `PHP ${Math.round(flight.price).toLocaleString("en-US")}`,
  };

  if (typeof flight.seatsAvailable === "number") {
    summary.seatsLeft = flight.seatsAvailable;
  }

  return summary;
}

function parsePrice(value: string) {
  return Number(value.replace(/[^0-9]/g, ""));
}

function formatCurrency(value: number) {
  return `PHP ${value.toLocaleString("en-US")}`;
}

const ResultsBookingPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchSuffix = location.search ?? "";
  const searchResultsLink = `${ROUTES.SEARCH_RESULTS}${searchSuffix}`;
  const locationState = location.state as LocationState | null;
  const selectedFlight = locationState?.flight;

  const loader = useCallback(async () => {
    const response = await searchFlights();
    return response.map(mapFlightToSummary);
  }, []);

  const { data: loadedFlights, isLoading } = useAsyncValue(loader);
  const flightPool = loadedFlights ?? [];

  const flight = useMemo(() => {
    if (selectedFlight) {
      return selectedFlight;
    }
    return flightPool.find((item) => item.id === id) ?? flightPool[0];
  }, [flightPool, id, selectedFlight]);

  if (isLoading && !selectedFlight) {
    return (
      <main className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-[#F3F5F7]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#496B92] border-t-transparent" />
      </main>
    );
  }

  if (!flight) {
    return (
      <main className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-[#F3F5F7]">
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-800">Flight Not Found</h2>
          <p className="mt-2 text-slate-500">The requested flight detail is not available.</p>
          <Link to={ROUTES.HOME} className="mt-4 inline-block text-blue-600 font-bold hover:underline">
            Go back to search
          </Link>
        </div>
      </main>
    );
  }

  const totalValue = parsePrice(flight.price || "0") || 1890;
  const baseValue = Math.round(totalValue * 0.78);
  const taxesValue = totalValue - baseValue;
  const totalLabel = formatCurrency(totalValue);
  const baseLabel = formatCurrency(baseValue);
  const taxesLabel = formatCurrency(taxesValue);

  const handleBook = () => {
    const nextPath = `${ROUTES.BOOKING_PASSENGER_DETAILS}${searchSuffix}`;
    if (isAuthenticated) {
      navigate(nextPath);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7]">
      <section className="mx-auto w-full max-w-6xl px-6 py-6">
        <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
          <Link to={searchResultsLink} className="hover:text-slate-700">
            Search Results
          </Link>
          <span>/</span>
          <span className="font-semibold text-slate-700">Flight Detail</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div>
            <FlightDetailCard flight={flight} />
            <FareRulesCard rules={FARE_RULES} />
          </div>
          <PriceSummaryCard
            cabin={flight.cabin}
            baseFare={baseLabel}
            taxes={taxesLabel}
            total={totalLabel}
            onBook={handleBook}
          />
        </div>
      </section>

      <AuthGateModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        continueTo={`${ROUTES.BOOKING_PASSENGER_DETAILS}${searchSuffix}`}
      />
    </main>
  );
};

export default ResultsBookingPage;
````

## File: src/pages/BookingResultPagesFolder/SearchResultsPage/components/FiltersPanel.tsx
````typescript
type FiltersPanelProps = {
  maxPrice: number;
  minPrice: number;
  maxRange: number;
  directOnly: boolean;
  timeFilters: string[];
  onMaxPriceChange: (value: number) => void;
  onToggleDirectOnly: () => void;
  onToggleTime: (timeId: string) => void;
};

const TIME_OPTIONS = [
  { id: "morning", label: "Morning (6AM-12PM)" },
  { id: "afternoon", label: "Afternoon (12PM-6PM)" },
  { id: "evening", label: "Evening (6PM+)" },
];

function formatCurrency(value: number) {
  return `PHP ${value.toLocaleString("en-US")}`;
}

const FiltersPanel = ({
  maxPrice,
  minPrice,
  maxRange,
  directOnly,
  timeFilters,
  onMaxPriceChange,
  onToggleDirectOnly,
  onToggleTime,
}: FiltersPanelProps) => {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-slate-900">Filters</h2>

      <div className="mt-4 space-y-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Max Price
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">
            {formatCurrency(maxPrice)}
          </p>
          <input
            type="range"
            min={minPrice}
            max={maxRange}
            value={maxPrice}
            onChange={(event) => onMaxPriceChange(Number(event.target.value))}
            className="mt-2 w-full accent-[#5D7FA7]"
          />
          <div className="mt-1 flex justify-between text-[10px] text-slate-400">
            <span>{formatCurrency(minPrice)}</span>
            <span>{formatCurrency(maxRange)}</span>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Stops
          </p>
          <label className="mt-2 flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={directOnly}
              onChange={onToggleDirectOnly}
              className="h-4 w-4 rounded border-slate-300 text-[#5D7FA7]"
            />
            Direct flights only
          </label>
        </div>

        <div className="border-t border-slate-100 pt-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Departure Time
          </p>
          <div className="mt-2 space-y-2">
            {TIME_OPTIONS.map((option) => (
              <label
                key={option.id}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <input
                  type="checkbox"
                  checked={timeFilters.includes(option.id)}
                  onChange={() => onToggleTime(option.id)}
                  className="h-4 w-4 rounded border-slate-300 text-[#5D7FA7]"
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FiltersPanel;
````

## File: src/pages/BookingResultPagesFolder/SearchResultsPage/components/FlightResultCard.tsx
````typescript
import { CheckCircle2, Luggage, Plane } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

export type FlightResult = {
  id: string;
  airline: string;
  airlineCode: string;
  flightNo: string;
  aircraft: string;
  departTime: string;
  arriveTime: string;
  duration: string;
  fromCode: string;
  toCode: string;
  stops: string;
  baggage: string;
  status: string;
  price: string;
  cabin: string;
  seatsLeft?: number;
};

type FlightResultCardProps = {
  flight: FlightResult;
  queryString?: string;
};

const FlightResultCard = ({ flight, queryString }: FlightResultCardProps) => {
  const detailLink = ROUTES.FLIGHT_DETAIL.replace(":id", flight.id);
  const detailHref = queryString ? `${detailLink}?${queryString}` : detailLink;
  const showSeats =
    typeof flight.seatsLeft === "number" && flight.seatsLeft > 0;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5D7FA7] text-sm font-semibold text-white">
            {flight.airlineCode}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {flight.airline}
            </p>
            <p className="text-xs text-slate-500">
              {flight.flightNo} - {flight.aircraft}
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-between gap-4">
          <div className="text-center">
            <p className="text-lg font-semibold text-slate-900">
              {flight.departTime}
            </p>
            <p className="text-xs text-slate-400">{flight.fromCode}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <p className="text-[11px] text-slate-500">{flight.duration}</p>
            <Plane size={14} className="text-emerald-600" />
            <p className="text-[11px] font-semibold text-emerald-600">
              {flight.stops}
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-slate-900">
              {flight.arriveTime}
            </p>
            <p className="text-xs text-slate-400">{flight.toCode}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-500">
          <Luggage size={14} className="text-slate-400" />
          {flight.baggage}
          <span className="flex items-center gap-1 text-emerald-600">
            <CheckCircle2 size={14} />
            {flight.status}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 md:flex-col md:items-end">
          <div className="text-right">
            <p className="text-lg font-semibold text-[#5D7FA7]">
              {flight.price}
            </p>
            <p className="text-xs text-slate-500">{flight.cabin} / pax</p>
            {showSeats ? (
              <p className="text-[11px] font-semibold text-rose-500">
                {flight.seatsLeft} seats left!
              </p>
            ) : null}
          </div>
          <Link
            to={detailHref}
            state={{ flight }}
            className="rounded-lg bg-[#5D7FA7] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#4E6B8D]"
          >
            Select
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FlightResultCard;
````

## File: src/pages/BookingResultPagesFolder/SearchResultsPage/SearchResultsPage.tsx
````typescript
import { useCallback, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import FiltersPanel from "./components/FiltersPanel";
import FlightResultCard, {
  type FlightResult,
} from "./components/FlightResultCard";
import { searchFlights } from "@/api/flights.api";
import type { CabinClass, Flight, FlightSearchParams } from "@/types";
import useAsyncValue from "@/hooks/useAsyncValue";

const FLIGHTS: FlightResult[] = [
  {
    id: "pa-2191",
    airline: "Philippine Airlines",
    airlineCode: "PA",
    flightNo: "PA 2191",
    aircraft: "Airbus A320",
    departTime: "06:00",
    arriveTime: "07:20",
    duration: "1h 20m",
    fromCode: "MNL",
    toCode: "CEB",
    stops: "Non-stop",
    baggage: "20kg",
    status: "On time",
    price: "PHP 1,890",
    cabin: "Economy",
  },
  {
    id: "cp-2193",
    airline: "Cebu Pacific",
    airlineCode: "CP",
    flightNo: "CP 2193",
    aircraft: "Boeing 737-800",
    departTime: "09:15",
    arriveTime: "10:35",
    duration: "1h 20m",
    fromCode: "MNL",
    toCode: "CEB",
    stops: "Non-stop",
    baggage: "20kg",
    status: "On time",
    price: "PHP 2,350",
    cabin: "Economy",
  },
  {
    id: "aa-2201",
    airline: "AirAsia",
    airlineCode: "AA",
    flightNo: "AA 2201",
    aircraft: "Airbus A321",
    departTime: "14:30",
    arriveTime: "15:55",
    duration: "1h 25m",
    fromCode: "MNL",
    toCode: "CEB",
    stops: "Non-stop",
    baggage: "30kg",
    status: "On time",
    price: "PHP 3,150",
    cabin: "Business",
    seatsLeft: 4,
  },
];

const MIN_PRICE = 1000;
const MAX_PRICE = 50000;

function mapFlightToResult(flight: Flight): FlightResult {
  const departure = new Date(flight.departureTime);
  const arrival = new Date(flight.arrivalTime);
  const totalMinutes =
    Number.isNaN(departure.getTime()) || Number.isNaN(arrival.getTime())
      ? 80
      : Math.max(
          Math.round((arrival.getTime() - departure.getTime()) / 60000),
          60,
        );
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return {
    id: flight.id,
    airline: flight.airline ?? "SkyLink",
    airlineCode: (flight.airline ?? "SK").slice(0, 2).toUpperCase(),
    flightNo: flight.flightNumber,
    aircraft: flight.cabinClass === "business" ? "Airbus A321" : "Airbus A320",
    departTime: departure.toISOString().slice(11, 16),
    arriveTime: arrival.toISOString().slice(11, 16),
    duration: `${hours}h ${minutes.toString().padStart(2, "0")}m`,
    fromCode: flight.origin,
    toCode: flight.destination,
    stops:
      flight.stops === 0 || flight.stops === undefined
        ? "Non-stop"
        : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`,
    baggage: `${flight.baggageAllowanceKg ?? 20}kg`,
    status:
      flight.status === "on_time"
        ? "On time"
        : flight.status === "boarding"
          ? "Boarding"
          : flight.status === "delayed"
            ? "Delayed"
            : flight.status === "cancelled"
              ? "Cancelled"
              : "Scheduled",
    price: `PHP ${Math.round(flight.price).toLocaleString("en-US")}`,
    cabin:
      flight.cabinClass === "business"
        ? "Business"
        : flight.cabinClass === "first"
          ? "First"
          : "Economy",
  };
}

function parsePrice(value: string) {
  return Number(value.replace(/[^0-9]/g, ""));
}

function getTimeBucket(time: string) {
  const hour = Number(time.split(":")[0]);
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "afternoon";
  return "evening";
}

function cleanLocation(value: string) {
  return value.replace(/\s*\([A-Z]{3}\)\s*/, "").trim();
}

function getCode(value: string) {
  const match = value.match(/\(([A-Z]{3})\)/);
  return match ? match[1] : "";
}

function toCabinClass(value: string): CabinClass | undefined {
  const normalized = value.toLowerCase();
  if (normalized === "premium economy") return "premium_economy";
  if (
    normalized === "economy" ||
    normalized === "business" ||
    normalized === "first"
  ) {
    return normalized;
  }
  return undefined;
}

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [maxPrice, setMaxPrice] = useState(50000);
  const [directOnly, setDirectOnly] = useState(true);
  const [timeFilters, setTimeFilters] = useState<string[]>([]);

  const fromParam = searchParams.get("from") ?? "Manila (MNL)";
  const toParam = searchParams.get("to") ?? "Cebu (CEB)";
  const dateParam = searchParams.get("date") ?? "";
  const paxParam = searchParams.get("pax") ?? "1";
  const cabinParam = searchParams.get("cabin") ?? "Economy";
  const fromLabel = cleanLocation(fromParam) || "Manila";
  const toLabel = cleanLocation(toParam) || "Cebu";
  const dateLabel = dateParam || "Any date";
  const queryString = searchParams.toString();
  const loader = useCallback(async () => {
    const cabinClass = toCabinClass(cabinParam);
    const params = {
      origin: getCode(fromParam) || fromLabel,
      destination: getCode(toParam) || toLabel,
      passengers: Number(paxParam) || 1,
      ...(dateParam ? { date: dateParam } : {}),
      ...(cabinClass ? { cabinClass } : {}),
    } satisfies FlightSearchParams;

    const response = await searchFlights(params);

    return response.length > 0 ? response.map(mapFlightToResult) : FLIGHTS;
  }, [cabinParam, dateParam, fromLabel, fromParam, paxParam, toLabel, toParam]);

  const { data: fetchedFlights, isLoading } = useAsyncValue(loader);
  const baseFlights = fetchedFlights ?? FLIGHTS;

  const filteredFlights = useMemo(() => {
    return baseFlights.filter((flight) => {
      if (parsePrice(flight.price) > maxPrice) {
        return false;
      }
      if (directOnly && flight.stops !== "Non-stop") {
        return false;
      }
      if (timeFilters.length > 0) {
        const bucket = getTimeBucket(flight.departTime);
        if (!timeFilters.includes(bucket)) {
          return false;
        }
      }
      return true;
    });
  }, [baseFlights, directOnly, maxPrice, timeFilters]);

  const toggleTimeFilter = (timeId: string) => {
    setTimeFilters((prev) =>
      prev.includes(timeId)
        ? prev.filter((item) => item !== timeId)
        : [...prev, timeId],
    );
  };

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Link
              to={ROUTES.HOME}
              className="text-slate-500 hover:text-slate-800"
            >
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-900">
              {fromLabel} to {toLabel}
            </span>
            <span className="text-xs text-slate-400">
              {dateLabel} | {paxParam} pax - {cabinParam}
            </span>
          </div>
          <Link
            to={ROUTES.BOOK}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-slate-300"
          >
            Edit Search
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <FiltersPanel
            maxPrice={maxPrice}
            minPrice={MIN_PRICE}
            maxRange={MAX_PRICE}
            directOnly={directOnly}
            timeFilters={timeFilters}
            onMaxPriceChange={setMaxPrice}
            onToggleDirectOnly={() => setDirectOnly((prev) => !prev)}
            onToggleTime={toggleTimeFilter}
          />

          <div className="space-y-4">
            <p className="text-xs text-slate-500">
              {isLoading
                ? "Loading flights..."
                : `${filteredFlights.length} flights found`}
            </p>
            {filteredFlights.map((flight) => (
              <FlightResultCard
                key={flight.id}
                flight={flight}
                queryString={queryString}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SearchResultsPage;
````

## File: src/pages/ExplorePagesFolder/DeaPage/DeaPage.tsx
````typescript
import { useCallback } from "react";
import { ArrowLeft, Calendar, CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import useAsyncValue from "@/hooks/useAsyncValue";

type DealRoute = {
  id: string;
  route: string;
  window: string;
  price: string;
};

type DealCard = {
  id: string;
  title: string;
  description: string;
  price: string;
  oldPrice: string;
  discount: string;
  validUntil: string;
  image: string;
  badge?: string;
};

type DealState = {
  deal?: DealCard;
};

type DealProfile = {
  about: string;
  routes: DealRoute[];
  terms: string[];
};

const DEFAULT_DEAL: DealCard = {
  id: "deal-bali",
  title: "Discover Bali from ₱6,200",
  description: "The Island of the Gods awaits - book early and save!",
  price: "₱6,200",
  oldPrice: "₱9,800",
  discount: "-36% OFF",
  validUntil: "Valid until Jul 15",
  image: "/Images/BookPage/Discover Bali from 6200.png",
  badge: "Weekend",
};

const DEAL_PROFILES: Record<string, DealProfile> = {
  CEBU: {
    about:
      "Limited seats at unbeatable prices. Book now and save big on your next getaway!",
    routes: [
      {
        id: "MNL-CEB",
        route: "MNL - CEB",
        window: "April-May 2026",
        price: "PHP 1,490",
      },
      {
        id: "CEB-MNL",
        route: "CEB - MNL",
        window: "April-May 2026",
        price: "PHP 1,690",
      },
    ],
    terms: ["25kg baggage included.", "Meal included.", "Refundable with fee."],
  },
  PALAWAN: {
    about:
      "Discover Palawan's pristine beaches with our special weekend rates.",
    routes: [
      {
        id: "MNL-PPS",
        route: "MNL - PPS",
        window: "May-June 2026",
        price: "PHP 2,199",
      },
      {
        id: "PPS-MNL",
        route: "PPS - MNL",
        window: "May-June 2026",
        price: "PHP 2,399",
      },
    ],
    terms: ["25kg baggage included.", "Meal included.", "Refundable with fee."],
  },
  SINGAPORE: {
    about:
      "Experience the Lion City at amazing prices. Perfect for a long weekend getaway.",
    routes: [
      {
        id: "MNL-SIN",
        route: "MNL - SIN",
        window: "May-June 2026",
        price: "PHP 7,500",
      },
      {
        id: "SIN-MNL",
        route: "SIN - MNL",
        window: "May-June 2026",
        price: "PHP 7,900",
      },
    ],
    terms: ["25kg baggage included.", "Meal included.", "Refundable with fee."],
  },
  TOKYO: {
    about:
      "Upgrade your Tokyo experience with our premium Business Class deal.",
    routes: [
      {
        id: "MNL-TYO",
        route: "MNL - TYO",
        window: "June-July 2026",
        price: "PHP 28,900",
      },
      {
        id: "TYO-MNL",
        route: "TYO - MNL",
        window: "June-July 2026",
        price: "PHP 29,800",
      },
    ],
    terms: [
      "Priority boarding included.",
      "Meal included.",
      "Refundable with fee.",
    ],
  },
  BORACAY: {
    about: "White beaches, crystal waters - now at summer sale prices.",
    routes: [
      {
        id: "MNL-KLO",
        route: "MNL - KLO",
        window: "April 2026",
        price: "PHP 1,650",
      },
      {
        id: "KLO-MNL",
        route: "KLO - MNL",
        window: "April 2026",
        price: "PHP 1,850",
      },
    ],
    terms: ["25kg baggage included.", "Meal included.", "Refundable with fee."],
  },
  BALI: {
    about: "The Island of the Gods awaits - book early and save!",
    routes: [
      {
        id: "MNL-DPS",
        route: "MNL - DPS",
        window: "August-September 2026",
        price: "PHP 6,200",
      },
      {
        id: "DPS-MNL",
        route: "DPS - MNL",
        window: "August-September 2026",
        price: "PHP 6,400",
      },
    ],
    terms: ["25kg baggage included.", "Meal included.", "Refundable with fee."],
  },
};

function getDealProfileKey(title: string) {
  const normalized = title.toLowerCase();
  if (normalized.includes("cebu")) return "CEBU";
  if (normalized.includes("palawan")) return "PALAWAN";
  if (normalized.includes("singapore")) return "SINGAPORE";
  if (normalized.includes("tokyo")) return "TOKYO";
  if (normalized.includes("boracay")) return "BORACAY";
  return "BALI";
}

const DeaPage = () => {
  const location = useLocation();
  const selectedDeal =
    (location.state as DealState | null)?.deal ?? DEFAULT_DEAL;
  const dealProfile = DEAL_PROFILES[getDealProfileKey(selectedDeal.title)];

  const loader = useCallback(
    async () => dealProfile.routes,
    [dealProfile.routes],
  );
  const { data: routesData } = useAsyncValue(loader);
  const availableRoutes = routesData ?? dealProfile.routes;

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7]">
      <section className="relative overflow-hidden bg-[#243247]">
        <img
          src={selectedDeal.image}
          alt={selectedDeal.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/40 to-transparent" />

        <div className="relative mx-auto flex h-55 max-w-6xl flex-col justify-end px-6 pb-6 text-white">
          <Link
            to={ROUTES.EXPLORE_PROMOS}
            className="absolute left-6 top-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90 transition hover:bg-white/25"
          >
            <ArrowLeft size={14} />
            Back
          </Link>

          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide">
            <span className="rounded-full bg-rose-500 px-2 py-1">
              {selectedDeal.discount}
            </span>
            <span className="rounded-full bg-emerald-600 px-2 py-1">
              {selectedDeal.badge ?? "Deal"}
            </span>
          </div>
          <h1 className="mt-3 text-2xl font-semibold md:text-3xl">
            {selectedDeal.title}
          </h1>
        </div>
      </section>

      <section className="px-6 pb-16 pt-6">
        <div className="mx-auto grid w-full max-w-6xl gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">
              About This Deal
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {selectedDeal.description || dealProfile.about}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-amber-600">
              <Calendar size={14} />
              {selectedDeal.validUntil}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">
              Available Routes
            </h2>
            <div className="mt-4 space-y-3">
              {availableRoutes.map((entry) => (
                <div
                  key={entry.id}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {entry.route}
                    </p>
                    <p className="text-xs text-slate-500">{entry.window}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-semibold text-[#5D7FA7]">
                        {entry.price}
                      </p>
                      <p className="text-[10px] uppercase text-slate-400">
                        One way
                      </p>
                    </div>
                    <Link
                      to={ROUTES.BOOK}
                      className="rounded-lg bg-[#5D7FA7] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#4E6B8D]"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">
              Terms & Conditions
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {dealProfile.terms.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#F9F4EE] p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Lowest fare from Manila
            </p>
            <p className="mt-2 text-2xl font-semibold text-[#5D7FA7]">
              {selectedDeal.price}
            </p>
            <p className="mt-1 text-xs text-slate-500">One-way - Economy</p>
            <Link
              to={ROUTES.BOOK}
              className="mt-4 block w-full rounded-lg bg-[#5D7FA7] px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-[#4E6B8D]"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DeaPage;
````

## File: src/pages/ExplorePagesFolder/DestinationPage/DestinationPage.tsx
````typescript
import { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Plane } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { searchFlights } from "@/api/flights.api";
import type { Flight } from "@/types";
import useAsyncValue from "@/hooks/useAsyncValue";

type FlightCard = {
  id: string;
  time: string;
  duration: string;
  price: string;
  cabin: string;
};

type DestinationState = {
  destination?: {
    id: string;
    code: string;
    name: string;
    location: string;
    duration: string;
    price: string;
    image: string;
  };
};

type DestinationProfile = {
  about: string;
  highlights: string[];
  bestTime: string;
  airport: string;
  lowestFare: string;
};

function mapFlightToCard(flight: Flight): FlightCard {
  return {
    id: flight.flightNumber,
    time: `${new Date(flight.departureTime).toISOString().slice(11, 16)} - ${new Date(flight.arrivalTime).toISOString().slice(11, 16)}`,
    duration:
      flight.stops === 0 || flight.stops === undefined
        ? "Non-stop"
        : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`,
    price: `PHP ${Math.round(flight.price).toLocaleString("en-US")}`,
    cabin: flight.cabinClass === "business" ? "Business" : "Economy",
  };
}

const DEFAULT_DESTINATION = {
  id: "ceb",
  code: "CEB",
  name: "Cebu",
  location: "Philippines",
  duration: "1h 20m",
  price: "PHP 1,890",
  image: "/Images/BookPage/Cebu.png",
};

const DESTINATION_PROFILES: Record<string, DestinationProfile> = {
  CEB: {
    about:
      "Known as the Queen City of the South, Cebu blends beaches, heritage landmarks, and a lively food scene in one easy island escape.",
    highlights: [
      "Magellan's Cross",
      "Osmeña Peak",
      "Kawasan Falls",
      "Sinulog Festival",
    ],
    bestTime: "November to May",
    airport: "CEB - Cebu",
    lowestFare: "PHP 1,890",
  },
  PPS: {
    about:
      "Puerto Princesa is the gateway to Palawan's lagoons, limestone cliffs, and calm island-hopping days.",
    highlights: ["Underground River", "Honda Bay", "Baywalk", "Island hopping"],
    bestTime: "November to May",
    airport: "PPS - Puerto Princesa",
    lowestFare: "PHP 2,499",
  },
  KLO: {
    about:
      "Kalibo opens the door to Boracay's powdery beaches and sunset trips across the islands of Aklan.",
    highlights: [
      "White Beach",
      "Puka Shell Beach",
      "Sunset sailings",
      "Island hopping",
    ],
    bestTime: "December to May",
    airport: "KLO - Kalibo",
    lowestFare: "PHP 1,650",
  },
  DVO: {
    about:
      "Davao offers mountain views, city comforts, and quick access to nature attractions across Mindanao.",
    highlights: [
      "Mount Apo",
      "Philippine Eagle Center",
      "People's Park",
      "Davao Crocodile Park",
    ],
    bestTime: "December to May",
    airport: "DVO - Davao",
    lowestFare: "PHP 1,750",
  },
  SIN: {
    about:
      "Singapore mixes skyline views, food hubs, and world-class attractions into a compact city break.",
    highlights: [
      "Marina Bay Sands",
      "Gardens by the Bay",
      "Sentosa",
      "Chinatown",
    ],
    bestTime: "February to April",
    airport: "SIN - Singapore",
    lowestFare: "PHP 7,500",
  },
  TYO: {
    about:
      "Tokyo combines neon nights, historic shrines, and a polished food scene that rewards longer stays.",
    highlights: [
      "Shibuya Crossing",
      "Asakusa",
      "Tsukiji Market",
      "Mt. Fuji day trips",
    ],
    bestTime: "March to May or September to November",
    airport: "TYO - Tokyo",
    lowestFare: "PHP 18,500",
  },
  HKG: {
    about:
      "Hong Kong is built for skyline views, harbor ferries, and quick city breaks with plenty of food stops.",
    highlights: ["Victoria Peak", "Star Ferry", "Tsim Sha Tsui", "Disneyland"],
    bestTime: "October to December",
    airport: "HKG - Hong Kong",
    lowestFare: "PHP 11,200",
  },
  DPS: {
    about:
      "Bali balances beaches, rice terraces, and temple stops with an easygoing holiday rhythm.",
    highlights: ["Uluwatu Temple", "Ubud", "Nusa Dua", "Kuta Beach"],
    bestTime: "April to October",
    airport: "DPS - Denpasar",
    lowestFare: "PHP 6,200",
  },
};

const DestinationPage = () => {
  const location = useLocation();
  const selectedDestination =
    (location.state as DestinationState | null)?.destination ??
    DEFAULT_DESTINATION;
  const destinationProfile =
    DESTINATION_PROFILES[selectedDestination.code] ?? DESTINATION_PROFILES.CEB;

  const loader = useCallback(async () => {
    const flights = await searchFlights({
      destination: selectedDestination.code,
    });
    return flights.map(mapFlightToCard);
  }, [selectedDestination.code]);

  const { data: flightData, isLoading } = useAsyncValue(loader);
  const availableFlights = flightData ?? [];

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7]">
      <section className="relative overflow-hidden bg-[#29384C]">
        {selectedDestination.image && (
          <img
            src={selectedDestination.image}
            alt={selectedDestination.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto flex h-56 max-w-6xl flex-col justify-end px-6 pb-6 text-white">
          <Link
            to={ROUTES.EXPLORE}
            className="absolute left-6 top-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90 transition hover:bg-white/25"
          >
            <ArrowLeft size={14} />
            Back
          </Link>

          <div className="flex items-center gap-2 text-xs text-white/70">
            <MapPin size={14} />
            {selectedDestination.location}
          </div>
          <h1 className="mt-1 text-3xl font-semibold">
            {selectedDestination.name}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-white/70">
            <span className="flex items-center gap-2">
              <Plane size={14} />
              {selectedDestination.duration} from Manila
            </span>
            <span>{selectedDestination.price}</span>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 pt-6">
        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                About {selectedDestination.name}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {destinationProfile.about}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                Top Highlights
              </h2>
              <ul className="mt-3 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                {destinationProfile.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5D7FA7]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-900">
                  Next Available Flights
                </h2>
                <Link
                  to={ROUTES.SEARCH_RESULTS}
                  className="text-xs font-semibold text-[#5D7FA7] hover:text-[#4E6B8D]"
                >
                  See all flights
                </Link>
              </div>

              <div className="mt-4 space-y-3">
                {isLoading ? (
                  <div className="flex justify-center py-10">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#496B92] border-t-transparent" />
                  </div>
                ) : availableFlights.length > 0 ? (
                  availableFlights.map((flight) => (
                    <div
                      key={flight.id}
                      className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#5D7FA7] text-xs font-semibold text-white">
                          SK
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {flight.id}
                          </p>
                          <p className="text-xs text-slate-500">
                            {flight.time} - {flight.duration}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-[#5D7FA7]">
                          {flight.price}
                        </p>
                        <p className="text-xs text-slate-500">{flight.cabin}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="py-6 text-center text-sm text-slate-500 italic">
                    No scheduled flights available for this destination.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Trip Info
              </h3>
              <div className="mt-4 space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <Clock size={14} className="text-[#5D7FA7]" />
                  <div>
                    <p className="font-semibold text-slate-700">
                      Flight Duration
                    </p>
                    <p>{selectedDestination.duration} from Manila</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-[#5D7FA7]" />
                  <div>
                    <p className="font-semibold text-slate-700">
                      Best Time to Visit
                    </p>
                    <p>{destinationProfile.bestTime}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Plane size={14} className="text-[#5D7FA7]" />
                  <div>
                    <p className="font-semibold text-slate-700">Airport</p>
                    <p>{destinationProfile.airport}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F9F4EE] p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Lowest fare from Manila
              </p>
              <p className="mt-2 text-2xl font-semibold text-[#5D7FA7]">
                {availableFlights[0]?.price ?? destinationProfile.lowestFare}
              </p>
              <p className="mt-1 text-xs text-slate-500">One-way - Economy</p>
              <Link
                to={ROUTES.BOOK}
                className="mt-4 block w-full rounded-lg bg-[#5D7FA7] px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-[#4E6B8D]"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DestinationPage;
````

## File: src/pages/ExplorePagesFolder/PromosPage/PromosPage.tsx
````typescript
import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Tag } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import useAsyncValue from "@/hooks/useAsyncValue";
import { getPromotions } from "@/api/promotions.api";

type Deal = {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  discount: string;
  badge: string;
  badgeClass: string;
  validUntil: string;
  image: string;
};

const PromosPage = () => {
  const [filter, setFilter] = useState<string>("all");

  const loader = useCallback(async () => {
    const data = await getPromotions();
    return data || [];
  }, []);

  const { data: promotions, isLoading } = useAsyncValue(loader);

  const deals = useMemo(() => {
    const allDeals: Deal[] = (promotions || []).map((promo) => {
      const sale = promo.sale_price || 0;
      const original = promo.original_price || 1; // avoid div by zero
      const discount = Math.round(((original - sale) / original) * 100);

      return {
        id: promo.id,
        title: promo.title || "Special Deal",
        description: promo.title || "",
        price: `₱${sale.toLocaleString()}`,
        originalPrice: `₱${original.toLocaleString()}`,
        discount: `${discount}% OFF`,
        badge: (promo.category || "PROMO").toUpperCase(),
        badgeClass:
          promo.category === "flash"
            ? "bg-warning-60 text-white"
            : promo.category === "weekend"
              ? "bg-success-60 text-white"
              : "bg-primary-60 text-white",
        validUntil: promo.valid_until || "Limited Time",
        image: promo.image_url ?? "",
      };
    });

    if (filter === "all") return allDeals;
    return allDeals.filter((deal) => deal.badge.toLowerCase() === filter);
  }, [promotions, filter]);

  const categories = [
    { id: "all", label: "All Deals" },
    { id: "flash", label: "Flash Sale" },
    { id: "weekend", label: "Weekend Escape" },
    { id: "international", label: "International" },
  ];

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7]">
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-center gap-3">
            <div className="bg-rose-50 p-2 rounded-lg text-rose-600">
              <Tag size={20} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Current Promos</h1>
          </div>
          <p className="mt-2 text-slate-500 max-w-2xl">
            Grab the lowest fares before they disappear. Limited-time offers on
            select domestic and international routes.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  filter === cat.id
                    ? "bg-[#496B92] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#496B92] border-t-transparent" />
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deals.map((deal) => (
              <Link
                key={deal.id}
                to={ROUTES.EXPLORE_PROMO_DETAIL}
                state={{ deal }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <article className="flex h-full flex-col">
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    {deal.image ? (
                      <img
                        src={deal.image}
                        alt={deal.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-slate-300">
                        <Tag size={48} />
                      </div>
                    )}
                    <div className="absolute left-3 top-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${deal.badgeClass}`}
                      >
                        {deal.badge}
                      </span>
                    </div>
                    <div className="absolute right-3 top-3">
                      <span className="rounded-full bg-rose-600 px-2 py-1 text-[11px] font-bold text-white">
                        {deal.discount}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                      {deal.title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500">Starting from</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold text-[#496B92]">
                            {deal.price}
                          </span>
                          <span className="text-sm text-slate-400 line-through">
                            {deal.originalPrice}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
                          <Clock size={12} />
                          <span>Expires {deal.validUntil}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}

            {!isLoading && deals.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-500 font-medium">
                  No active promotions found in this category.
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default PromosPage;
````

## File: src/pages/HomePage/HomePage.tsx
````typescript
import HeroImage from "@/assets/BackgroundImages/homepagePlane.png";
import LondonImg from "@/assets/BackgroundImages/london.png";
import ParisImg from "@/assets/BackgroundImages/paris.png";
import TokyoImg from "@/assets/BackgroundImages/tokyo.png";
import SydneyImg from "@/assets/BackgroundImages/sydney.png";
import FlightSearchForm from "@/pages/_shared/components/flights/FlightSearchForm";
import { ArrowRight, ConciergeBell, Plane, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="relative min-h-screen bg-[#FDFBF8]">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[650px] w-full flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="SkyLink Hero"
            className="h-full w-full object-cover object-[center_45%] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-4 md:space-y-6">
            <div className="space-y-0">
              <h1 className="text-[42px] md:text-[64px] lg:text-[84px] font-normal tracking-tight text-[#16202C] leading-[1.1]">
                Your Journey,
              </h1>
              <h1 className="text-[42px] md:text-[64px] lg:text-[84px] font-bold italic tracking-tight text-[#496B92] leading-[1.1] mt-[-5px] md:mt-[-10px]">
                Refined.
              </h1>
            </div>

            <p className="text-[15px] md:text-[18px] lg:text-[21px] text-slate-700 max-w-xl leading-[1.6] font-medium opacity-90">
              Experience flight as it was intended. Seamless transitions,
              curated comfort, and the attentive care of the Digital Concierge.
            </p>

            <div className="pt-4 md:pt-8 w-full">
              <FlightSearchForm />
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Escapes Section */}
      <section className="py-12 md:py-16 bg-[#FDFBF8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 md:mb-10">
            <div>
              <h2 className="text-[30px] md:text-[40px] font-bold text-[#16202C] mb-2 tracking-tight">
                Seasonal Escapes
              </h2>
              <p className="text-[14px] md:text-[16px] text-slate-500 font-medium">
                Hand-picked by our SkyLink Concierge.
              </p>
            </div>
            <Link
              to="#"
              className="flex items-center gap-2 text-[#496B92] font-bold text-[14px] md:text-[15px] hover:underline group"
            >
              View all destinations{" "}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Strict Bento Grid - London is the height anchor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl">
            {/* Left: London - Large Square spanning 2 row heights */}
            <div className="relative rounded-[16px] md:rounded-[24px] overflow-hidden group cursor-pointer aspect-square">
              <img
                src={LondonImg}
                alt="London"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest opacity-80 mb-1">
                  United Kingdom
                </p>
                <h3 className="text-[24px] md:text-[32px] font-bold">London</h3>
              </div>
            </div>

            {/* Right: Nested Grid for perfect alignment */}
            <div className="grid grid-rows-2 gap-4 md:gap-6">
              {/* Paris - Horizontal Rectangle (Top Half) */}
              <div className="relative rounded-[16px] md:rounded-[24px] overflow-hidden group cursor-pointer h-full">
                <img
                  src={ParisImg}
                  alt="Paris"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                  <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest opacity-80 mb-0.5">
                    France
                  </p>
                  <h3 className="text-[20px] md:text-[28px] font-bold">
                    Paris
                  </h3>
                </div>
              </div>

              {/* Bottom Row: Tokyo & Sydney - Two Squares (Bottom Half) */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 h-full">
                <div className="relative rounded-[16px] md:rounded-[24px] overflow-hidden group cursor-pointer aspect-square md:aspect-auto">
                  <img
                    src={TokyoImg}
                    alt="Tokyo"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 text-white">
                    <p className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest opacity-80 mb-0.5">
                      Japan
                    </p>
                    <h3 className="text-[18px] md:text-[22px] font-bold">
                      Tokyo
                    </h3>
                  </div>
                </div>
                <div className="relative rounded-[16px] md:rounded-[24px] overflow-hidden group cursor-pointer aspect-square md:aspect-auto">
                  <img
                    src={SydneyImg}
                    alt="Sydney"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 text-white">
                    <p className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest opacity-80 mb-0.5">
                      Australia
                    </p>
                    <h3 className="text-[18px] md:text-[22px] font-bold">
                      Sydney
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information / Features Section */}
      <section className="py-16 md:py-20 bg-[#FDFBF8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="space-y-5">
              <div className="w-12 h-12 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#496B92]">
                <ConciergeBell size={22} className="stroke-[1.5px]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#16202C]">
                  Personal Concierge
                </h3>
                <p className="text-[15px] text-slate-500 leading-[1.6]">
                  Dedicated assistance from booking to landing, ensuring every
                  detail is handled with precision.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="w-12 h-12 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#496B92]">
                <Plane size={22} className="stroke-[1.5px]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#16202C]">
                  Curated Lounges
                </h3>
                <p className="text-[15px] text-slate-500 leading-[1.6]">
                  Access to our private network of airport retreats designed for
                  tranquility and productivity.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="w-12 h-12 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#496B92]">
                <Leaf size={22} className="stroke-[1.5px]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#16202C]">
                  Sustainable Flight
                </h3>
                <p className="text-[15px] text-slate-500 leading-[1.6]">
                  We lead with SAF-powered aircraft and a commitment to
                  zero-emission operational targets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal gap before footer */}
      <div className="h-4 md:h-8"></div>
    </main>
  );
};

export default HomePage;
````

## File: src/pages/MainPagesFolder/BookingLandingPage/components/PassengerSelector.tsx
````typescript
import { useEffect, useRef, useState } from "react";
import { colors, typography } from "@/constants/theme";
import { RxPeople } from "react-icons/rx";


export type CabinClass = "Economy" | "Business" | "First";

export type PassengerCounts = {
  adults: number;
  children: number;
  infants: number;
};

type PassengerSelectorProps = {
  defaultPassengers?: PassengerCounts;
  defaultCabinClass?: CabinClass;
  onChange?: (passengers: PassengerCounts, cabinClass: CabinClass) => void;
};

const CABIN_CLASSES: CabinClass[] = ["Economy", "Business", "First"];

function CounterRow({
  label,
  sublabel,
  count,
  min,
  onDecrement,
  onIncrement,
}: {
  label: string;
  sublabel: string;
  count: number;
  min: number;
  onDecrement: () => void;
  onIncrement: () => void;
}) {
  const canDecrement = count > min;
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex flex-col gap-0.5">
        <span className={`${typography.paragraph.sm.medium} ${colors.text.primary}`}>{label}</span>
        <span className={`${typography.paragraph.xs.normal} ${colors.text.secondary}`}>{sublabel}</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrement}
          disabled={!canDecrement}
          className={`size-[30px] shrink-0 rounded-full border flex items-center justify-center transition-colors ${
            canDecrement
              ? "bg-bg-page border-primary-60 text-primary-60"
              : "bg-bg-input border-tertiary-30 text-tertiary-30"
          }`}
        >
          <span className="text-[18px] font-bold leading-none mb-px">−</span>
        </button>
        <span className={`w-5 text-center ${typography.label.sm.semiBold} ${colors.text.primary}`}>{count}</span>
        <button
          type="button"
          onClick={onIncrement}
          className="size-[30px] shrink-0 rounded-full border border-primary-60 bg-bg-page text-primary-60 flex items-center justify-center transition-colors hover:bg-primary-10"
        >
          <span className="text-[18px] font-bold leading-none mb-px">+</span>
        </button>
      </div>
    </div>
  );
}

function totalPassengers(counts: PassengerCounts) {
  return counts.adults + counts.children + counts.infants;
}

const PassengerSelector: React.FC<PassengerSelectorProps> = ({
  defaultPassengers = { adults: 1, children: 0, infants: 0 },
  defaultCabinClass = "Economy",
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [counts, setCounts] = useState<PassengerCounts>(defaultPassengers);
  const [cabinClass, setCabinClass] = useState<CabinClass>(defaultCabinClass);
  const [committed, setCommitted] = useState({ counts, cabinClass });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const adjust = (field: keyof PassengerCounts, delta: number, min: number) => {
    setCounts(prev => ({ ...prev, [field]: Math.max(min, prev[field] + delta) }));
  };

  const handleDone = () => {
    setCommitted({ counts, cabinClass });
    onChange?.(counts, cabinClass);
    setOpen(false);
  };

  const total = totalPassengers(committed.counts);
  const label = `${total} ${total === 1 ? "Passenger" : "Passengers"}, ${committed.cabinClass}`;

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className={`w-full flex items-center justify-between gap-2 ${colors.surface.input} border border-tertiary-30 rounded-[10px] px-4 h-14 text-left`}
      >
        <div className="flex items-center gap-2">
          <RxPeople size={16} strokeWidth={0.5} className="shrink-0 text-primary-60" />
          <span className={`${typography.paragraph.md.normal} ${colors.text.primary}`}>{label}</span>
        </div>
        <svg
          className={`w-4 h-4 shrink-0 transition-transform ${colors.text.tertiary} ${open ? "rotate-180" : ""}`}
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-50 mt-2 w-full bg-bg-page border border-tertiary-30 rounded-[14px] shadow-[0px_10px_15px_rgba(0,0,0,0.1),0px_4px_6px_rgba(0,0,0,0.1)] p-4">
          <CounterRow label="Adults" sublabel="12+ years" count={counts.adults} min={1} onDecrement={() => adjust("adults", -1, 1)} onIncrement={() => adjust("adults", 1, 1)} />
          <CounterRow label="Children" sublabel="2–11 years" count={counts.children} min={0} onDecrement={() => adjust("children", -1, 0)} onIncrement={() => adjust("children", 1, 0)} />
          <CounterRow label="Infants" sublabel="Under 2 years" count={counts.infants} min={0} onDecrement={() => adjust("infants", -1, 0)} onIncrement={() => adjust("infants", 1, 0)} />
          <div className="border-t border-tertiary-30 my-3" />
          <p className={`${typography.label.xs.semiBold} ${colors.text.secondary} uppercase tracking-wide mb-3`}>Cabin Class</p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {CABIN_CLASSES.map(cls => (
              <button
                key={cls}
                type="button"
                onClick={() => setCabinClass(cls)}
                className={`h-9 rounded-[10px] ${typography.label.sm.semiBold} transition-colors ${
                  cabinClass === cls
                    ? "bg-primary-60 text-text-on-primary"
                    : `${colors.surface.input} ${colors.text.tertiary} hover:bg-tertiary-20`
                }`}
              >
                {cls}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={handleDone}
            className={`w-full h-9 rounded-[10px] ${colors.action.primary} ${colors.action.primaryHover} ${typography.label.sm.semiBold} transition-colors`}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default PassengerSelector;
````

## File: src/pages/MainPagesFolder/BookingLandingPage/components/TripTypePill.tsx
````typescript
import { colors, typography } from "@/constants/theme";

export type TripType = "one-way" | "round-trip";

interface TripTypePillsProps {
  tripType: TripType;
  setTripType: (type: TripType) => void;
}

const TripTypePills = ({ tripType, setTripType }: TripTypePillsProps) => {
  return (
    <div className="flex gap-2">
      {(["one-way", "round-trip"] as const).map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => setTripType(type)}
          // Note: Assumes `typography` and `colors` are imported at the top of the file
          className={`px-4 py-[6px] rounded-full ${typography.label.sm.semiBold} transition-colors ${
            tripType === type
              ? `${colors.action.primary}`
              : "bg-tertiary-10 text-tertiary-80"
          }`}
        >
          {type === "one-way" ? "One Way" : "Round Trip"}
        </button>
      ))}
    </div>
  );
};

export default TripTypePills;
````

## File: src/pages/MainPagesFolder/BookingLandingPage/BookingLandingPage.tsx
````typescript
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { colors, typography } from "@/constants/theme";
import { ROUTES } from "@/constants/routes";
import { CiLocationOn, CiSearch, CiClock2 } from "react-icons/ci";
import { Tag } from "lucide-react";
import DatePicker from "@/pages/_shared/components/ui/DatePicker";
import TripTypePill, { type TripType } from "./components/TripTypePill";
import PassengerSelector, {
  type CabinClass,
  type PassengerCounts,
} from "./components/PassengerSelector";
import { getPromotions } from "@/api/promotions.api";
import { searchFlights } from "@/api/flights.api";
import type { Flight } from "@/types";
import type { Promotion } from "@/types/promotion.types";
import { cn } from "@/utils/cn";

type Route = {
  id: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  price: string;
  duration: string;
};

type Destination = {
  id: string;
  code: string;
  city: string;
  startingFrom: string;
  bgClass: string;
  image: string;
};

type AirportOption = {
  code: string;
  city: string;
  airport: string;
  country: string;
};

const AIRPORTS: AirportOption[] = [
  {
    code: "MNL",
    city: "Manila",
    airport: "Ninoy Aquino International Airport",
    country: "Philippines",
  },
  {
    code: "CEB",
    city: "Cebu",
    airport: "Mactan-Cebu International Airport",
    country: "Philippines",
  },
  {
    code: "DVO",
    city: "Davao",
    airport: "Francisco Bangoy International Airport",
    country: "Philippines",
  },
  {
    code: "PPS",
    city: "Palawan",
    airport: "Puerto Princesa International Airport",
    country: "Philippines",
  },
  {
    code: "KLO",
    city: "Kalibo",
    airport: "Kalibo International Airport",
    country: "Philippines",
  },
  {
    code: "SIN",
    city: "Singapore",
    airport: "Changi International Airport",
    country: "Singapore",
  },
  {
    code: "HKG",
    city: "Hong Kong",
    airport: "Hong Kong International Airport",
    country: "Hong Kong",
  },
];

function IconChevronRight() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
}

function filterAirports(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return AIRPORTS;
  }
  return AIRPORTS.filter((airport) =>
    [airport.city, airport.code, airport.airport, airport.country]
      .join(" ")
      .toLowerCase()
      .includes(normalized),
  );
}

function getCode(value: string) {
  const match = value.match(/\(([A-Z]{3})\)/);
  return match ? match[1] : "";
}

function DealCard({ deal }: { deal: Promotion }) {
  const discount = Math.round(
    ((deal.original_price - deal.sale_price) / deal.original_price) * 100,
  );

  const badgeClass = cn(
    "absolute bottom-3 right-3 text-text-on-primary px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
    deal.category === "flash" && "bg-warning-60",
    deal.category === "weekend" && "bg-success-60",
    deal.category === "international" && "bg-purple-60",
    deal.category === "promo" && "bg-blue-60",
  );

  return (
    <Link
      to={ROUTES.EXPLORE_PROMO_DETAIL}
      state={{
        deal: {
          id: deal.id,
          title: deal.title,
          description: deal.title,
          price: `₱${(deal.sale_price || 0).toLocaleString()}`,
          oldPrice: `₱${(deal.original_price || 0).toLocaleString()}`,
          discount: `-${discount}%`,
          validUntil: deal.valid_until,
          image: deal.image_url ?? "",
          badge: deal.category,
        },
      }}
      className="bg-bg-page border border-tertiary-30 rounded-[14px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.04)] text-left w-full hover:shadow-md transition-shadow"
    >
      <div className="relative h-35 bg-tertiary-20">
        {deal.image_url ? (
          <img
            src={deal.image_url}
            alt={deal.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-60 to-primary-80 flex items-center justify-center">
            <Tag size={40} className="text-white/20" />
          </div>
        )}
        <span className="absolute top-3 left-3 bg-rose-600 text-text-on-primary text-[11px] font-bold px-2 py-1 rounded-full">
          -{discount}%
        </span>
        <span className={badgeClass}>{deal.category}</span>
      </div>
      <div className="p-4">
        <p
          className={`${typography.label.md.bold} ${colors.text.primary} line-clamp-1`}
        >
          {deal.title}
        </p>
        <div className="flex items-baseline gap-2 mt-2">
          <span
            className={`${typography.heading.h3.bold} font-extrabold text-[#496B92]`}
          >
            ₱{(deal.sale_price || 0).toLocaleString()}
          </span>
          <span
            className={`${typography.paragraph.sm.medium} ${colors.text.secondary} line-through`}
          >
            ₱{(deal.original_price || 0).toLocaleString()}
          </span>
        </div>
        <div
          className={`flex items-center gap-1.5 mt-2 ${colors.text.secondary}`}
        >
          <CiClock2 size={11} className="shrink-0" />
          <span className={typography.paragraph.xs.medium}>
            {deal.valid_until}
          </span>
        </div>
      </div>
    </Link>
  );
}

function RouteCard({ route }: { route: Route }) {
  return (
    <Link
      to={ROUTES.SEARCH_RESULTS}
      className="bg-bg-page border border-tertiary-30 rounded-[14px] p-4 flex items-center justify-between hover:shadow-sm transition-shadow w-full text-left"
    >
      <div className="flex items-center gap-3">
        <div>
          <p
            className={`${typography.label.sm.semiBold} ${colors.text.primary}`}
          >
            {route.from}
          </p>
          <p
            className={`mt-2 ${typography.paragraph.xs.medium} ${colors.text.secondary}`}
          >
            {route.fromCode}
          </p>
        </div>
        <svg
          className={`h-3.75 w-3.75 shrink-0 ${colors.text.tertiary}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        <div>
          <p
            className={`${typography.label.sm.semiBold} ${colors.text.primary}`}
          >
            {route.to}
          </p>
          <p
            className={`mt-2 ${typography.paragraph.xs.medium} ${colors.text.secondary}`}
          >
            {route.toCode}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className={`${typography.label.md.bold} text-[#496B92]`}>
          {route.price}
        </p>
        <p
          className={`mt-2 ${typography.paragraph.xs.medium} ${colors.text.secondary}`}
        >
          {route.duration}
        </p>
      </div>
    </Link>
  );
}

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      to={ROUTES.EXPLORE_DESTINATION}
      state={{
        destination: {
          id: destination.id,
          code: destination.code,
          name: destination.city,
          location: "Philippines",
          duration: "1h 20m",
          price: destination.startingFrom,
          image: destination.image,
        },
      }}
      className="relative h-50 rounded-[14px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.06)] w-full text-left hover:shadow-md transition-shadow"
    >
      {destination.image ? (
        <img
          src={destination.image}
          alt={destination.city}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className={`absolute inset-0 ${destination.bgClass}`} />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-primary-100/75 to-transparent" />
      <div className="absolute bottom-3 left-3">
        <p className={`${typography.label.md.bold} text-text-static-light`}>
          {destination.city}
        </p>
        <p className={`mt-2 ${typography.paragraph.xs.medium} text-white/80`}>
          {destination.startingFrom}
        </p>
      </div>
    </Link>
  );
}

function SectionHeader({
  title,
  linkLabel,
  to,
}: {
  title: string;
  linkLabel: string;
  to?: string;
}) {
  return (
    <div className="flex items-center justify-between mb-5">
      <h2 className={`${typography.heading.h3.bold} ${colors.text.primary}`}>
        {title}
      </h2>
      {to ? (
        <Link
          to={to}
          className={`${typography.label.sm.semiBold} ${colors.text.link} flex items-center gap-1 transition-colors`}
        >
          {linkLabel}
          <IconChevronRight />
        </Link>
      ) : (
        <button
          type="button"
          className={`${typography.label.sm.semiBold} ${colors.text.link} flex items-center gap-1 transition-colors`}
        >
          {linkLabel}
          <IconChevronRight />
        </button>
      )}
    </div>
  );
}

const BookingLandingPage = () => {
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [fromQuery, setFromQuery] = useState("Manila (MNL)");
  const [toQuery, setToQuery] = useState("Cebu (CEB)");
  const [dateValue, setDateValue] = useState("");
  const [passengers, setPassengers] = useState<PassengerCounts>({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [cabinClass, setCabinClass] = useState<CabinClass>("Economy");
  const [openField, setOpenField] = useState<"from" | "to" | null>(null);
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [promosData, flightsData] = await Promise.all([
          getPromotions(),
          searchFlights(),
        ]);
        setPromotions(promosData || []);
        setFlights(flightsData || []);
      } catch (err) {
        console.error("Failed to fetch landing page data", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (fromRef.current?.contains(event.target as Node)) {
        return;
      }
      if (toRef.current?.contains(event.target as Node)) {
        return;
      }
      setOpenField(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selectedFromCode = getCode(fromQuery);
  const selectedToCode = getCode(toQuery);
  const fromOptions = filterAirports(fromQuery).filter(
    (option) => option.code !== selectedToCode,
  );
  const toOptions = filterAirports(toQuery).filter(
    (option) => option.code !== selectedFromCode,
  );

  const selectFrom = (option: AirportOption) => {
    setFromQuery(`${option.city} (${option.code})`);
    setOpenField(null);
  };

  const selectTo = (option: AirportOption) => {
    setToQuery(`${option.city} (${option.code})`);
    setOpenField(null);
  };

  const totalPassengers =
    passengers.adults + passengers.children + passengers.infants;
  const searchHref = (() => {
    const params = new URLSearchParams();
    params.set("from", fromQuery);
    params.set("to", toQuery);
    if (dateValue) {
      params.set("date", dateValue);
    }
    params.set("pax", String(totalPassengers));
    params.set("cabin", cabinClass);
    return `${ROUTES.SEARCH_RESULTS}?${params.toString()}`;
  })();

  const popularRoutes: Route[] = useMemo(() => {
    const seen = new Set<string>();
    const routes: Route[] = [];
    (flights || []).forEach((flight) => {
      const key = `${flight.origin}-${flight.destination}`;
      if (!seen.has(key)) {
        seen.add(key);
        routes.push({
          id: flight.id,
          from: flight.originCity || flight.origin,
          fromCode: flight.origin,
          to: flight.destinationCity || flight.destination,
          toCode: flight.destination,
          price: `₱${(flight.price || 0).toLocaleString()}`,
          duration: "1h 20m", // Default or calculated
        });
      }
    });
    return routes.slice(0, 6);
  }, [flights]);

  const derivedDestinations: Destination[] = useMemo(() => {
    const seen = new Set<string>();
    const dests: Destination[] = [];
    (flights || []).forEach((flight) => {
      if (flight.destination && !seen.has(flight.destination)) {
        seen.add(flight.destination);
        dests.push({
          id: flight.id,
          code: flight.destination,
          city: flight.destinationCity || flight.destination,
          startingFrom: `From ₱${(flight.price || 0).toLocaleString()}`,
          bgClass: "bg-primary-60",
          image: flight.imageUrl ?? "",
        });
      }
    });
    return dests.slice(0, 4);
  }, [flights]);


  return (
    <div className="bg-bg-surface min-h-screen">
      {/* Hero */}
      <section className="relative pb-5">
        <div className="absolute inset-0 bg-primary-90" />
        <img
          src="/Images/BookPage/WhereDoYouWantToFLySection.png"
          alt="SkyLink booking hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary-100/70 via-primary-100/55 to-primary-100/30" />

        <div className="relative z-10 flex flex-col items-center gap-2 pt-8 px-4">
          <h1
            className={`${typography.heading.h1.bold} md:text-display-2 text-text-static-light text-center`}
          >
            Where do you want to fly?
          </h1>
          <p
            className={`${typography.paragraph.md.normal} md:text-para-lg text-white/80 text-center`}
          >
            Great fares, simple booking, seamless travel — only on SkyLink.
          </p>
        </div>

        {/* Search card */}
        <div className="relative z-10 mx-auto mb-16 mt-8 w-full max-w-200 px-4">
          <div className="bg-bg-page rounded-2xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-4">
            {/* Trip type pills */}
            <div className="flex gap-2">
              <TripTypePill tripType={tripType} setTripType={setTripType} />
            </div>

            {/* From / To */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div ref={fromRef} className="relative">
                <div
                  className={`flex items-center gap-2 ${colors.surface.input} border border-tertiary-30 rounded-[10px] px-4 h-14 cursor-text`}
                  onClick={() => setOpenField("from")}
                >
                  <CiLocationOn
                    size={16}
                    strokeWidth={1}
                    className={`shrink-0 text-[#496B92]`}
                  />
                  <input
                    type="text"
                    value={fromQuery}
                    onChange={(event) => {
                      setFromQuery(event.target.value);
                      setOpenField("from");
                    }}
                    onFocus={() => setOpenField("from")}
                    placeholder="From - City or airport"
                    className={`bg-transparent flex-1 ${typography.paragraph.md.normal} ${colors.text.primary} outline-none placeholder:${colors.text.tertiary}`}
                    autoComplete="off"
                  />
                </div>
                {openField === "from" && (
                  <div className="absolute z-40 mt-2 w-full rounded-[14px] border border-tertiary-30 bg-white p-2 shadow-[0px_10px_20px_rgba(0,0,0,0.12)]">
                    {fromOptions.map((option) => (
                      <button
                        key={option.code}
                        type="button"
                        onClick={() => selectFrom(option)}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-slate-50"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-xs font-semibold text-slate-600">
                          {option.code}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {option.city}
                          </p>
                          <p className="text-xs text-slate-500">
                            {option.airport} - {option.country}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div ref={toRef} className="relative">
                <div
                  className={`flex items-center gap-2 ${colors.surface.input} border border-tertiary-30 rounded-[10px] px-4 h-14 cursor-text`}
                  onClick={() => setOpenField("to")}
                >
                  <CiLocationOn
                    size={16}
                    strokeWidth={1}
                    className={`shrink-0 text-[#496B92]`}
                  />
                  <input
                    type="text"
                    value={toQuery}
                    onChange={(event) => {
                      setToQuery(event.target.value);
                      setOpenField("to");
                    }}
                    onFocus={() => setOpenField("to")}
                    placeholder="To - City or airport"
                    className={`bg-transparent flex-1 ${typography.paragraph.md.normal} ${colors.text.primary} outline-none placeholder:${colors.text.tertiary}`}
                    autoComplete="off"
                  />
                </div>
                {openField === "to" && (
                  <div className="absolute z-40 mt-2 w-full rounded-[14px] border border-tertiary-30 bg-white p-2 shadow-[0px_10px_20px_rgba(0,0,0,0.12)]">
                    {toOptions.map((option) => (
                      <button
                        key={option.code}
                        type="button"
                        onClick={() => selectTo(option)}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-slate-50"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-xs font-semibold text-slate-600">
                          {option.code}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {option.city}
                          </p>
                          <p className="text-xs text-slate-500">
                            {option.airport} - {option.country}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Date / Passengers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <DatePicker value={dateValue} onChange={setDateValue} />
              <PassengerSelector
                defaultPassengers={passengers}
                defaultCabinClass={cabinClass}
                onChange={(counts, cabin) => {
                  setPassengers(counts);
                  setCabinClass(cabin);
                }}
              />
            </div>

            {/* Search CTA */}
            <Link
              to={searchHref}
              className={`w-full bg-[#496B92] hover:bg-[#3B5470] ${typography.label.md.semiBold} h-14 rounded-[10px] flex items-center justify-center gap-2 transition-colors text-white`}
            >
              <CiSearch size={18} strokeWidth={1.5} className="shrink-0" />
              Search Flights
            </Link>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <div className="mx-auto flex max-w-282.75 flex-col gap-12 px-6 py-10">
        <section>
          <SectionHeader
            title="Best Deals Right Now"
            linkLabel="See all deals"
            to={ROUTES.EXPLORE_PROMOS}
          />
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="h-[260px] rounded-[14px] bg-slate-100 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {promotions.map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
              {promotions.length === 0 && (
                <p className="col-span-full text-center py-10 text-slate-500 font-medium">
                  No active deals at the moment. Check back soon!
                </p>
              )}
            </div>
          )}
        </section>

        <section>
          <SectionHeader
            title="Popular Routes"
            linkLabel="Explore all"
            to={ROUTES.SEARCH_RESULTS}
          />
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="h-[80px] rounded-[14px] bg-slate-100 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularRoutes.map((route) => (
                <RouteCard key={route.id} route={route} />
              ))}
              {popularRoutes.length === 0 && (
                <p className="col-span-full text-center py-10 text-slate-500 font-medium">
                  No routes available at the moment.
                </p>
              )}
            </div>
          )}
        </section>

        {derivedDestinations.length > 0 && (
          <section>
            <SectionHeader
              title="Explore Destinations"
              linkLabel="View all"
              to={ROUTES.EXPLORE}
            />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {derivedDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BookingLandingPage;
````

## File: src/pages/MainPagesFolder/ExplorePage/ExplorePage.tsx
````typescript
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { colors, typography } from "@/constants/theme";
import { ROUTES } from "@/constants/routes";
import { CiSearch, CiClock2 } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { RiPriceTagLine } from "react-icons/ri";
import { HiChevronRight } from "react-icons/hi2";
import { getPromotions } from "@/api/promotions.api";
import { searchFlights } from "@/api/flights.api";
import type { Flight } from "@/types";
import type { Promotion } from "@/types/promotion.types";

// ─── Derived types ────────────────────────────────────────────────────────────

type Destination = {
  id: string;
  code: string;
  name: string;
  location: string;
  duration: string;
  price: string;
  bgClass: string;
  image: string;
};

type Deal = {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  discount: string;
  badge: string;
  badgeClass: string;
  validUntil: string;
  image: string;
};

// ─── Cards ────────────────────────────────────────────────────────────────────

function DestinationCard({ dest }: { dest: Destination }) {
  return (
    <Link
      to={ROUTES.EXPLORE_DESTINATION}
      state={{ destination: dest }}
      className="relative h-55 rounded-[14px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.06)] w-full text-left hover:shadow-md transition-shadow"
    >
      {dest.image ? (
        <img
          src={dest.image}
          alt={dest.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className={`absolute inset-0 ${dest.bgClass}`} />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-primary-100/75 to-transparent" />
      <div className="absolute bottom-3 left-3">
        <p className={`${typography.label.md.bold} text-white`}>{dest.name}</p>
        <p className={`${typography.paragraph.xs.medium} text-white/75 mt-0.5`}>
          {dest.location} · {dest.duration}
        </p>
        <p className={`${typography.label.sm.semiBold} text-white/90 mt-1`}>
          {dest.price}
        </p>
      </div>
    </Link>
  );
}

function DealCard({ deal }: { deal: Deal }) {
  return (
    <Link
      to={ROUTES.EXPLORE_PROMO_DETAIL}
      state={{ deal }}
      className="bg-bg-page border border-tertiary-30 rounded-[14px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.04)] text-left w-full hover:shadow-md transition-shadow"
    >
      <div className="relative h-32.5 bg-tertiary-20">
        {deal.image && (
          <img
            src={deal.image}
            alt={deal.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <span
          className={`absolute top-2 left-2 bg-danger-60 text-white ${typography.label.xs.bold} px-2 py-0.5 rounded-full`}
        >
          {deal.discount}
        </span>
        <span
          className={`absolute top-2 right-2 ${deal.badgeClass} text-white ${typography.label.xs.semiBold} px-2 py-0.5 rounded-full`}
        >
          {deal.badge}
        </span>
      </div>
      <div className="p-4">
        <p className={`${typography.label.md.bold} ${colors.text.primary}`}>
          {deal.title}
        </p>
        <div className="flex items-baseline gap-2 mt-2">
          <span
            className={`${typography.heading.h3.bold} font-extrabold text-primary-60`}
          >
            {deal.price}
          </span>
          <span
            className={`${typography.paragraph.sm.medium} ${colors.text.secondary} line-through`}
          >
            {deal.originalPrice}
          </span>
        </div>
        <div
          className={`flex items-center gap-1.5 mt-2 ${colors.text.secondary}`}
        >
          <CiClock2 size={11} className="shrink-0" />
          <span className={typography.paragraph.xs.medium}>
            {deal.validUntil}
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const ExplorePage = () => {
  const [search, setSearch] = useState("");
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [promosData, flightsData] = await Promise.all([
          getPromotions(),
          searchFlights(),
        ]);
        setPromotions(promosData || []);
        setFlights(flightsData || []);
      } catch (err) {
        console.error("Failed to fetch explore page data", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const destinations = useMemo(() => {
    const seen = new Set<string>();
    const dests: Destination[] = [];
    (flights || []).forEach((flight) => {
      if (flight.destination && !seen.has(flight.destination)) {
        seen.add(flight.destination);
        dests.push({
          id: flight.id,
          code: flight.destination,
          name: flight.destinationCity || flight.destination,
          location: "Philippines",
          duration: "1h 20m",
          price: `From ₱${(flight.price || 0).toLocaleString()}`,
          bgClass: "bg-primary-60",
          image: flight.imageUrl ?? "",
        });
      }
    });

    const query = search.trim().toLowerCase();
    if (!query) return dests;
    return dests.filter((destination) =>
      `${destination.name} ${destination.location} ${destination.price}`
        .toLowerCase()
        .includes(query),
    );
  }, [flights, search]);

  const deals = useMemo(() => {
    const query = search.trim().toLowerCase();
    const allDeals: Deal[] = (promotions || []).map((promo) => {
      const sale = promo.sale_price || 0;
      const original = promo.original_price || 1; // avoid div by zero
      const discount = Math.round(((original - sale) / original) * 100);

      return {
        id: promo.id,
        title: promo.title || "Special Deal",
        description: promo.title || "",
        price: `₱${sale.toLocaleString()}`,
        originalPrice: `₱${original.toLocaleString()}`,
        discount: `${discount}% OFF`,
        badge: (promo.category || "PROMO").toUpperCase(),
        badgeClass:
          promo.category === "flash"
            ? "bg-warning-60"
            : promo.category === "weekend"
              ? "bg-success-60"
              : "bg-primary-60",
        validUntil: promo.valid_until || "Limited Time",
        image: promo.image_url ?? "",
      };
    });

    if (!query) return allDeals;
    return allDeals.filter((deal) =>
      `${deal.title} ${deal.price} ${deal.originalPrice} ${deal.badge}`
        .toLowerCase()
        .includes(query),
    );
  }, [promotions, search]);

  return (
    <div className="bg-bg-surface min-h-screen">
      {/* Hero */}
      <section
        className="flex flex-col items-center gap-4 px-4 py-16"
        style={{
          background: "linear-gradient(167deg, #16202c 0%, #3a516d 100%)",
        }}
      >
        <h1
          className={`${typography.heading.h1.bold} md:text-display-3 text-text-static-light text-center`}
        >
          Explore the World with SkyLink
        </h1>
        <p
          className={`${typography.paragraph.md.normal} text-white/70 text-center`}
        >
          Discover popular destinations, exclusive deals, and flexible fare
          options.
        </p>
        <div className="bg-white flex items-center gap-2 px-4 rounded-[14px] h-12 w-full max-w-125 mt-2">
          <CiSearch size={18} className="text-text-tertiary shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search destinations..."
            className={`flex-1 bg-transparent ${typography.paragraph.md.normal} ${colors.text.primary} outline-none placeholder:text-text-tertiary`}
          />
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto flex max-w-282.75 flex-col gap-12 px-6 py-10">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#496B92] border-t-transparent" />
          </div>
        ) : (
          <>
            {/* Popular Destinations */}
            <section>
              <div className="flex items-center gap-2 mb-5">
                <FiMapPin
                  size={20}
                  strokeWidth={2}
                  className="shrink-0 text-primary-60"
                />
                <h2
                  className={`${typography.heading.h3.bold} ${colors.text.primary}`}
                >
                  Popular Destinations
                </h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {destinations.length > 0 ? (
                  destinations.map((dest) => (
                    <DestinationCard key={dest.id} dest={dest} />
                  ))
                ) : (
                  <p
                    className={`col-span-4 ${typography.paragraph.md.normal} ${colors.text.secondary}`}
                  >
                    No destinations found.
                  </p>
                )}
              </div>
            </section>

            {/* Best Deals */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <RiPriceTagLine
                    size={20}
                    strokeWidth={0.5}
                    className="shrink-0 text-primary-60"
                  />
                  <h2
                    className={`${typography.heading.h3.bold} ${colors.text.primary}`}
                  >
                    Best Deals
                  </h2>
                </div>
                <Link
                  to={ROUTES.EXPLORE_PROMOS}
                  className={`${typography.label.sm.semiBold} ${colors.text.link} flex items-center gap-1`}
                >
                  See all{" "}
                  <HiChevronRight
                    size={16}
                    strokeWidth={1}
                    className="shrink-0 text-primary-60"
                  />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {deals.length > 0 ? (
                  deals.map((deal) => <DealCard key={deal.id} deal={deal} />)
                ) : (
                  <p
                    className={`col-span-3 ${typography.paragraph.md.normal} ${colors.text.secondary}`}
                  >
                    No deals available.
                  </p>
                )}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
````

## File: src/pages/MainPagesFolder/FlightStatusPage/FlightStatusPage.tsx
````typescript
import { useState, useEffect } from "react";
import {
  Search,
  Plane,
  MapPin,
  Monitor,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import { searchFlights } from "@/api/flights.api";
import { getPNRStatus } from "@/api/pnr.api";
import type { Flight, PNRStatusResult } from "@/types";

/* ================= TYPES ================= */

type TabType = "pnr" | "flight";
type FlightStatus = "on-time" | "delayed" | "cancelled";

type FlightResult = {
  status: FlightStatus;
  flightCode: string;
  newArrival?: string;
  departure: {
    code: string;
    city: string;
    scheduled: string;
    actual?: string | null;
  };
  arrival: {
    code: string;
    city: string;
    scheduled: string;
    actual?: string | null;
  };
  gate: string;
  terminal: string;
};

function mapFlightToStatusResult(flight: Flight): FlightResult {
  const departure = new Date(flight.departureTime);
  const arrival = new Date(flight.arrivalTime);

  return {
    status:
      flight.status === "delayed"
        ? "delayed"
        : flight.status === "cancelled"
          ? "cancelled"
          : "on-time",
    flightCode: flight.flightNumber,
    departure: {
      code: flight.origin,
      city: flight.originCity ?? flight.origin,
      scheduled: departure.toISOString().slice(11, 16),
      actual: null,
    },
    arrival: {
      code: flight.destination,
      city: flight.destinationCity ?? flight.destination,
      scheduled: arrival.toISOString().slice(11, 16),
      actual: null,
    },
    gate: "Gate 1",
    terminal: "Terminal 1",
  };
}

function mapPNRToStatusResult(pnr: PNRStatusResult): FlightResult {
  const segment = pnr.itinerary[0];
  const departure = segment ? new Date(segment.departureTime) : new Date();
  const arrival = segment ? new Date(segment.arrivalTime) : new Date();

  return {
    status:
      pnr.journeyStatus === "delayed"
        ? "delayed"
        : pnr.journeyStatus === "cancelled"
          ? "cancelled"
          : "on-time",
    flightCode: segment?.flightNumber ?? "TBA",
    departure: {
      code: segment?.origin ?? "TBA",
      city: segment?.origin ?? "TBA",
      scheduled: segment ? departure.toISOString().slice(11, 16) : "--:--",
      actual: null,
    },
    arrival: {
      code: segment?.destination ?? "TBA",
      city: segment?.destination ?? "TBA",
      scheduled: segment ? arrival.toISOString().slice(11, 16) : "--:--",
      actual: null,
    },
    gate: "TBA",
    terminal: "TBA",
  };
}

/* ================= CONFIG ================= */

const TAB_CONFIG: Record<
  TabType,
  {
    label: string;
    inputLabel: string;
    placeholder: string;
    examples: string[];
  }
> = {
  pnr: {
    label: "By PNR",
    inputLabel: "PNR / Booking Reference",
    placeholder: "E.G. ABC123",
    examples: ["ABC123"],
  },
  flight: {
    label: "By Flight No.",
    inputLabel: "Flight Number",
    placeholder: "E.G. PR101",
    examples: ["PR101"],
  },
};

/* ================= STATUS CONFIG ================= */

const STATUS_CONFIG: Record<
  FlightStatus,
  {
    bg: string;
    border: string;
    text: string;
    icon: React.ReactNode;
    label: string;
  }
> = {
  "on-time": {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-700",
    icon: <CheckCircle className="w-4 h-4 text-green-600" />,
    label: "On Time",
  },
  delayed: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-700",
    icon: <AlertTriangle className="w-4 h-4 text-yellow-600" />,
    label: "Delayed",
  },
  cancelled: {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-700",
    icon: <XCircle className="w-4 h-4 text-red-600" />,
    label: "Cancelled",
  },
};

/* ================= COMPONENTS ================= */

const Tabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}) => (
  <div className="mb-6 flex rounded-xl border border-slate-200 p-1 bg-slate-50">
    {(Object.keys(TAB_CONFIG) as TabType[]).map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all duration-200 ${
          activeTab === tab
            ? "bg-white text-[#1e2d4a] shadow-sm"
            : "text-slate-400 hover:text-slate-600"
        }`}
      >
        {TAB_CONFIG[tab].label}
      </button>
    ))}
  </div>
);

const FlightResultCard = ({
  data,
  onCheckAnother,
}: {
  data: FlightResult;
  onCheckAnother: () => void;
}) => {
  const s = STATUS_CONFIG[data.status];
  const isDelayed = data.status === "delayed";
  const isCancelled = data.status === "cancelled";

  return (
    <div className="mt-5 rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
      {/* Status Bar */}
      <div
        className={`flex items-center justify-between px-4 py-2.5 ${s.bg} border-b ${s.border}`}
      >
        <div className="flex items-center gap-2">
          {s.icon}
          <span className={`text-xs font-semibold ${s.text}`}>
            {isDelayed
              ? `Delayed — New arrival: ${data.newArrival ?? "--:--"}`
              : isCancelled
                ? "Cancelled"
                : "On Time"}
          </span>
        </div>
        <span className={`text-xs font-bold tracking-widest ${s.text}`}>
          {data.flightCode}
        </span>
      </div>

      {/* Route */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center justify-between">
          {/* Departure */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
              Departure
            </p>
            <h2 className="text-3xl font-bold text-[#1a2a4a] leading-none mt-0.5">
              {data.departure.code}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {data.departure.city}
            </p>
            <p className="text-sm font-medium text-slate-700 mt-1">
              {data.departure.scheduled}
            </p>
            {data.departure.actual && (
              <p className="text-xs text-red-500 font-medium">
                Actual: {data.departure.actual}
              </p>
            )}
          </div>

          {/* Plane Icon */}
          <div className="flex flex-col items-center gap-1">
            <div className="h-px w-16 bg-slate-200" />
            <Plane size={16} className="text-slate-400" />
            <div className="h-px w-16 bg-slate-200" />
          </div>

          {/* Arrival */}
          <div className="text-right">
            <p className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
              Arrival
            </p>
            <h2 className="text-3xl font-bold text-[#1a2a4a] leading-none mt-0.5">
              {data.arrival.code}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">{data.arrival.city}</p>
            <p className="text-sm font-medium text-slate-700 mt-1">
              {data.arrival.scheduled}
            </p>
            {data.arrival.actual && (
              <p className="text-xs text-red-500 font-medium">
                Actual: {data.arrival.actual}
              </p>
            )}
          </div>
        </div>

        <div className="my-4 border-t border-dashed border-slate-200" />

        {/* Gate / Terminal */}
        <div className="flex justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <MapPin size={12} className="text-slate-400" />
            <span>
              <span className="font-semibold text-slate-700">Gate</span>{" "}
              {data.gate}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Monitor size={12} className="text-slate-400" />
            <span>
              <span className="font-semibold text-slate-700">Terminal</span>{" "}
              {data.terminal}
            </span>
          </div>
        </div>
      </div>

      {/* Check Another Flight */}
      <div className="px-5 pb-4 pt-1">
        <button
          onClick={onCheckAnother}
          className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-[#5E83AE] hover:text-[#1e2d4a] transition-colors"
        >
          <Search size={12} />
          Check Another Flight →
        </button>
      </div>
    </div>
  );
};

/* ================= MAIN PAGE ================= */

const FlightStatusPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("pnr");
  const [values, setValues] = useState<Record<TabType, string>>({
    pnr: "",
    flight: "",
  });
  const [result, setResult] = useState<FlightResult | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const config = TAB_CONFIG[activeTab];

  // Clear result & error when switching tabs
  useEffect(() => {
    setResult(null);
    setError("");
  }, [activeTab]);

  const handleSubmit = async () => {
    const val = values[activeTab].trim().toUpperCase().replace(/\s+/g, "");
    if (!val) {
      setError("Please enter a value.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      if (activeTab === "pnr") {
        const res = await getPNRStatus(val);
        if (res) {
          setResult(mapPNRToStatusResult(res));
        } else {
          setResult(null);
          setError("No flight status found for this PNR.");
        }
      } else {
        const flights = await searchFlights();
        const match = flights.find(
          (flight) =>
            flight.flightNumber.replace(/\s+/g, "").toUpperCase() === val,
        );

        if (match) {
          setResult(mapFlightToStatusResult(match));
        } else {
          setResult(null);
          setError("No flight found with this number.");
        }
      }
    } catch (err) {
      console.error("Failed to check status", err);
      setError("An error occurred while checking flight status.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckAnother = () => {
    setResult(null);
    setError("");
    setValues({ pnr: "", flight: "" });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f0f2f5]">
      {/* Hero Header */}
      <div className="flex flex-col items-center gap-2 bg-[#1e2d4a] px-6 pb-16 pt-12 text-center">
        <Plane size={28} color="#fff" />
        <h1 className="text-2xl font-bold text-white">Flight Status</h1>
        <p className="text-sm text-slate-300 max-w-xs">
          Real-time updates for your flight — gate, terminal, delays, and more.
        </p>
      </div>

      {/* Card */}
      <div className="flex flex-1 flex-col items-center px-5 py-10">
        <div className="w-full max-w-4xl">
          <div className="rounded-2xl bg-white p-6 shadow-xl">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Input */}
            <div className="mb-5">
              <label className="mb-2 block text-xs font-semibold text-slate-600">
                {config.inputLabel}
              </label>
              <input
                type="text"
                placeholder={config.placeholder}
                value={values[activeTab]}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    [activeTab]: e.target.value.toUpperCase(),
                  }))
                }
                onKeyDown={handleKeyDown}
                maxLength={10}
                className="w-full rounded-xl border border-[#d8dfee] px-4 py-3.5 text-sm tracking-widest text-[#1a2a4a] outline-none focus:border-[#1e2d4a] focus:ring-2 focus:ring-[#1e2d4a]/10 transition"
              />
              <p className="mt-2 text-xs text-slate-400">
                Try:{" "}
                {config.examples.map((ex, i) => (
                  <span key={ex}>
                    <button
                      onClick={() =>
                        setValues((prev) => ({ ...prev, [activeTab]: ex }))
                      }
                      className="rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-mono text-slate-600 hover:bg-slate-200 transition"
                    >
                      {ex}
                    </button>
                    {i < config.examples.length - 1 && " or "}
                  </span>
                ))}
              </p>
              {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
            </div>

            <button
              onClick={() => void handleSubmit()}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#5E83AE] py-3.5 text-sm font-semibold text-white hover:bg-[#1e2d4a] transition-colors"
            >
              <Search size={16} />
              {isLoading ? "Checking..." : "Check Status"}
            </button>
          </div>

          {result && (
            <FlightResultCard
              data={result}
              onCheckAnother={handleCheckAnother}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightStatusPage;
````

## File: src/pages/MainPagesFolder/ManagePage/components/BookingCard.tsx
````typescript
import { useState } from "react";
import { Link } from "react-router-dom";
import { colors, typography } from "@/constants/theme";

const BookingCard = () => {
  const [pnr, setPnr] = useState("");

  const handleRetrieve = () => {
    // TODO: wire up PNR lookup
  };

  return (
    <div className="flex w-full flex-col gap-5 rounded-2xl border border-[var(--color-tertiary-30)] bg-white px-6 py-6">

      {/* PNR Input */}
      <div className="flex flex-col gap-2">
        <label className={`${typography.paragraph.sm.semiBold} text-text-tertiary text-left`}>
          Booking Reference (PNR)
        </label>
        <div className="flex h-[52px] items-center rounded-[14px] border border-[var(--color-tertiary-30)] bg-[var(--color-grey-10)] px-4">
          <input
            type="text"
            value={pnr}
            onChange={(e) => setPnr(e.target.value.toUpperCase())}
            placeholder="e.g. SK7831"
            maxLength={10}
            className={`${typography.label.lg.bold} ${colors.text.tertiary} flex items-center w-full `}
          />
        </div>
      </div>

      {/* Retrieve Button */}
      <button
        type="button"
        onClick={handleRetrieve}
        className={`${typography.label.md.semiBold} ${colors.action.primary} ${colors.text.onPrimary} flex items-center justify-center w-full h-12 rounded-[14px] py-3 text-center`}
      >
        Retrieve Booking
      </button>

      {/* Divider */}
      <div className="h-px bg-[var(--color-tertiary-30)]" />

      {/* Sign In Link */}
      <Link
        to="#"
        className={`${typography.label.md.semiBold} ${colors.action.ghost} ${colors.text.link} text-center flex items-center justify-center w-full h-12 rounded-[14px]`}
      >
        Sign In to View All Bookings
      </Link>
    </div>
  );
};

export default BookingCard;
````

## File: src/pages/MainPagesFolder/ManagePage/ManagePage.tsx
````typescript
import { typography } from "@/constants/theme";
import { FiBookOpen } from "react-icons/fi";
import BookingCard from "./components/BookingCard";

const ManagePage = () => {
  return (
    <section className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-[var(--color-tertiary-10)] px-6 py-12">
      <div className="flex w-full max-w-md flex-col items-center gap-8">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <FiBookOpen size={40} strokeWidth={2} className={`shrink-0 text-primary-60`}/>
          <h2 className={`${typography.heading.h2.bold} md:text-heading-2 text-text-static-dark text-center`}>
            Find Your Booking
          </h2>
          <p className={`${typography.paragraph.md.normal} text-text-secondary text-center`}>
            Enter your PNR to retrieve your booking details.
          </p>
        </div>

        {/* Card */}
        <BookingCard />
      </div>
    </section>
  );
};

export default ManagePage;
````

## File: src/pages/ManageBookingPagesFolder/components/ManageBookingDetailsLayout.tsx
````typescript
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Armchair,
  Utensils,
  Download,
  RotateCw,
  Plane,
  Info,
} from "lucide-react";

import { ROUTES } from "@/constants/routes";

import {
  formatPeso,
  getStatusBadgeClass,
  getStatusLabel,
  type ManageBooking,
} from "@/pages/ManageBookingPagesFolder/manageBookingData";

type ManageBookingDetailsLayoutProps = {
  booking: ManageBooking;
  actionsDisabled?: boolean;
};

const ManageBookingDetailsLayout = ({
  booking,
  actionsDisabled = false,
}: ManageBookingDetailsLayoutProps) => {
  const cancelHref = ROUTES.MANAGE_BOOKING_CANCEL.replace(":id", booking.id);

  const badgeClass = getStatusBadgeClass(booking.status);
  const statusLabel = getStatusLabel(booking.status);
  const isUpcoming = booking.status === "upcoming";

  const actionBaseClass =
    "inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-xs font-bold transition";

  const actionDisabledClass = actionsDisabled
    ? "pointer-events-none opacity-60"
    : "";
  const modifyDisabledClass =
    actionsDisabled || !isUpcoming ? "pointer-events-none opacity-60" : "";

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_320px]">
      {/* LEFT CONTENT */}
      <div className="w-full space-y-4">
        {/* FLIGHT CARD */}
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {/* TOP */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${badgeClass}`}
              >
                {statusLabel}
              </span>

              <span className="text-xs font-bold text-slate-400">
                {booking.flightCode}
              </span>
            </div>

            <p className="text-xs text-slate-400">
              Booking Reference:{" "}
              <span className="font-bold text-[#5D7FA7]">{booking.pnr}</span>
            </p>
          </div>

          {/* SEPARATOR */}
          <div className="mt-4 border-t border-slate-100 pt-5">
            {/* FLIGHT ROUTE */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* FROM */}
              <div>
                <p className="text-3xl font-bold text-slate-800">
                  {booking.fromCode}
                </p>

                <p className="text-sm font-bold text-[#5D7FA7]">
                  {booking.departTime}
                </p>

                <p className="text-xs text-slate-400">{booking.fromCity}</p>
              </div>

              {/* CENTER */}
              <div className="flex flex-col items-center text-center text-xs text-slate-400">
                <p className="font-semibold">{booking.duration}</p>

                <div className="mt-2 flex items-center gap-2">
                  <Plane className="h-4 w-4 text-[#5D7FA7]" />
                </div>
              </div>

              {/* TO */}
              <div className="text-right">
                <p className="text-3xl font-bold text-slate-800">
                  {booking.toCode}
                </p>

                <p className="text-sm font-bold text-[#5D7FA7]">
                  {booking.arriveTime}
                </p>

                <p className="text-xs text-slate-400">{booking.toCity}</p>
              </div>
            </div>
          </div>

          {/* DETAILS */}
          <div className="mt-6 grid gap-4 border-t border-slate-100 pt-5 text-xs text-slate-500 sm:grid-cols-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-slate-400" />

              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Date
                </p>

                <p className="font-bold text-slate-700">{booking.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-slate-400" />

              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Passengers
                </p>

                <p className="font-bold text-slate-700">{booking.passengers}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Armchair className="h-4 w-4 text-slate-400" />

              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Seat
                </p>

                <p className="font-bold text-slate-700">{booking.seat}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Utensils className="h-4 w-4 text-slate-400" />

              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  Meal
                </p>

                <p className="font-bold text-slate-700">{booking.meal}</p>
              </div>
            </div>
          </div>
        </div>

        {/* PAYMENT SUMMARY */}
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-500">Payment Summary</p>

          <div className="mt-3 flex items-center justify-between pt-1 text-xs text-slate-500">
            <span>Total paid</span>

            <span className="text-sm font-bold text-[#5D7FA7]">
              {formatPeso(booking.total)}
            </span>
          </div>

          <p className="mt-2 text-xs text-slate-400">
            Booked on {booking.bookingDate}
          </p>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="space-y-4">
        {/* ACTIONS */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-bold text-slate-800">Manage Booking</p>

          <div className="mt-3 flex flex-col gap-2">
            <button
              type="button"
              className={`${actionBaseClass} border-2 border-[#5D7FA7] bg-[#5D7FA7] text-white hover:bg-[#4E6B8D] ${actionDisabledClass}`}
            >
              <Download className="h-4 w-4" />
              Download E-ticket
            </button>

            <button
              type="button"
              className={`${actionBaseClass} border-2 border-[#AFC2DD] bg-white text-[#5D7FA7] hover:border-[#8EA7CB] ${modifyDisabledClass}`}
            >
              <RotateCw className="h-4 w-4" />
              Reschedule Flight
            </button>

            <Link
              to={cancelHref}
              aria-disabled={actionsDisabled || !isUpcoming}
              className={`${actionBaseClass} border-2 border-rose-300 bg-rose-50 text-rose-600 hover:border-rose-400 ${modifyDisabledClass}`}
            >
              Cancel Booking
            </Link>
          </div>
        </div>

        {/* SUPPORT */}
        <div className="rounded-xl border border-slate-200 bg-[#FFF8EE] p-3 text-xs text-slate-500">
          <div className="flex items-start gap-2">
            <Info className="mt-0.5 h-4 w-4 text-[#5D7FA7]" />

            <p>
              For further assistance, contact us at{" "}
              <span className="font-bold text-[#5D7FA7]">
                support@skylink.ph
              </span>
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ManageBookingDetailsLayout;
````

## File: src/pages/ManageBookingPagesFolder/ManageBookingCanceledPage/ManageBookingCanceledPage.tsx
````typescript
import { Link, Navigate, useParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import {
  formatPeso,
  loadManageBookingById,
} from "@/pages/ManageBookingPagesFolder/manageBookingData";
import useAsyncValue from "@/hooks/useAsyncValue";

const ManageBookingCanceledPage = () => {
  const { id } = useParams();
  const { data: booking, isLoading } = useAsyncValue(() =>
    loadManageBookingById(id),
  );

  if (isLoading && !booking) {
    return (
      <main className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-[#F3F5F7]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#496B92] border-t-transparent" />
      </main>
    );
  }

  if (!booking) {
    return <Navigate to={ROUTES.MANAGE} replace />;
  }
  const refundAmount = Math.max(booking.total - booking.cancellationFee, 0);

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7] px-6 py-12">
      <section className="mx-auto w-full max-w-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="mt-4 text-xl font-bold text-slate-800">
          Cancellation Confirmed
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Your booking has been successfully cancelled. A refund notification
          has been sent to your email.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm">
          <p className="text-lg font-bold text-slate-800">Refund Summary</p>
          <div className="mt-3 space-y-2 text-xs text-slate-500">
            <div className="flex items-center justify-between">
              <span>Original amount</span>
              <span className="font-bold text-slate-700">
                {formatPeso(booking.total)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Cancellation fee</span>
              <span className="font-bold text-rose-500">
                -{formatPeso(booking.cancellationFee)}
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 pt-2">
              <span className="font-bold text-slate-800 text-lg">
                Refund amount
              </span>
              <span className="font-bold text-emerald-600 text-lg">
                {formatPeso(refundAmount)}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Refund will be processed within 7-14 business days to your
              original payment method.
            </p>
          </div>
        </div>

        <Link
          to={ROUTES.MANAGE}
          className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#5D7FA7] px-5 py-2 text-sm font-medium text-white hover:bg-[#4E6B8D]"
        >
          Back to My Bookings
        </Link>
      </section>
    </main>
  );
};

export default ManageBookingCanceledPage;
````

## File: src/pages/ManageBookingPagesFolder/ManageBookingCancelPage/ManageBookingCancelPage.tsx
````typescript
import { Link, Navigate, useParams } from "react-router-dom";
import { X, AlertTriangle } from "lucide-react";

import { ROUTES } from "@/constants/routes";

import ManageBookingDetailsLayout from "@/pages/ManageBookingPagesFolder/components/ManageBookingDetailsLayout";

import {
  formatPeso,
  loadManageBookingById,
} from "@/pages/ManageBookingPagesFolder/manageBookingData";
import useAsyncValue from "@/hooks/useAsyncValue";

const ManageBookingCancelPage = () => {
  const { id } = useParams();

  const { data: booking, isLoading } = useAsyncValue(() =>
    loadManageBookingById(id),
  );

  if (isLoading && !booking) {
    return (
      <main className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-[#F3F5F7]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#496B92] border-t-transparent" />
      </main>
    );
  }

  if (!booking) {
    return <Navigate to={ROUTES.MANAGE} replace />;
  }

  if (booking.status !== "upcoming") {
    return (
      <Navigate
        to={ROUTES.MANAGE_BOOKING_DETAIL.replace(":id", booking.id)}
        replace
      />
    );
  }

  const refundAmount = Math.max(booking.total - booking.cancellationFee, 0);

  const detailHref = ROUTES.MANAGE_BOOKING_DETAIL.replace(":id", booking.id);

  const canceledHref = ROUTES.MANAGE_BOOKING_CANCELED.replace(
    ":id",
    booking.id,
  );

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7] px-6 py-8">
      {/* BACKGROUND CONTENT */}
      <section className="mx-auto w-full max-w-7xl">
        <div className="pointer-events-none opacity-80">
          <ManageBookingDetailsLayout booking={booking} actionsDisabled />
        </div>
      </section>

      {/* OVERLAY */}
      <div className="fixed inset-0 z-40 bg-slate-900/40" />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
        <div
          className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
          role="dialog"
          aria-modal="true"
        >
          {/* HEADER */}
          <div className="flex items-start justify-between gap-4">
            {/* LEFT */}
            <div>
              {/* ICON + TITLE */}
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                  <AlertTriangle className="h-5 w-5" />
                </span>

                <h2 className="text-base font-bold text-slate-800">
                  Cancel Booking?
                </h2>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-3 text-xs text-slate-500">
                Are you sure you want to cancel flight{" "}
                <span className="font-semibold text-slate-700">
                  {booking.flightCode}
                </span>{" "}
                ({booking.fromCode} {"->"} {booking.toCode})?
              </p>
            </div>

            {/* CLOSE BUTTON */}
            <Link
              to={detailHref}
              className="rounded-full p-1 text-slate-400 transition hover:text-slate-600"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Link>
          </div>

          {/* REFUND BOX */}
          <div className="mt-4 rounded-xl bg-[#FBF6EF] p-4 text-xs text-slate-600">
            <p className="font-bold text-amber-700">Refund Estimate</p>

            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between">
                <span>Total paid</span>

                <span>{formatPeso(booking.total)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Cancellation fee</span>

                <span>-{formatPeso(booking.cancellationFee)}</span>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-amber-100 pt-3">
                <span className="font-bold text-black">Refund amount</span>

                <span className="font-bold text-emerald-600">
                  {formatPeso(refundAmount)}
                </span>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              to={detailHref}
              className="flex-1 rounded-lg bg-[#5D7FA7] px-4 py-2 text-center text-xs font-bold text-white transition hover:bg-[#4E6B8D]"
            >
              Keep Booking
            </Link>

            <Link
              to={canceledHref}
              className="flex-1 rounded-lg border border-rose-200 bg-rose-50 px-4 py-2 text-center text-xs font-bold text-rose-600 transition hover:border-rose-300"
            >
              Yes, Cancel
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManageBookingCancelPage;
````

## File: src/pages/ManageBookingPagesFolder/ManageBookingDetailsPage/ManageBookingDetailsPage.tsx
````typescript
import { Link, Navigate, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import ManageBookingDetailsLayout from "@/pages/ManageBookingPagesFolder/components/ManageBookingDetailsLayout";
import { loadManageBookingById } from "@/pages/ManageBookingPagesFolder/manageBookingData";
import useAsyncValue from "@/hooks/useAsyncValue";

const ManageBookingDetailsPage = () => {
  const { id } = useParams();
  const { data: booking, isLoading } = useAsyncValue(() =>
    loadManageBookingById(id),
  );

  if (isLoading && !booking) {
    return (
      <main className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-[#F3F5F7]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#496B92] border-t-transparent" />
      </main>
    );
  }

  if (!booking) {
    return <Navigate to={ROUTES.MANAGE} replace />;
  }

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7]">
      {/* HEADER */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <Link
              to={ROUTES.MANAGE}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#5D7FA7] transition hover:text-[#4E6B8D]"
            >
              <ChevronLeft className="h-4 w-4" />
              My Bookings
            </Link>

            <span className="text-slate-300">/</span>

            <span className="font-medium text-slate-400">{booking.pnr}</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto w-full max-w-7xl px-6 py-6">
        <ManageBookingDetailsLayout booking={booking} />
      </section>
    </main>
  );
};

export default ManageBookingDetailsPage;
````

## File: src/pages/ManageBookingPagesFolder/ManageBookingsPage/ManageBookingsPage.tsx
````typescript
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Plane, ChevronRight, BookOpen } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import {
  loadManageBookings,
  formatPeso,
  getStatusBadgeClass,
  getStatusLabel,
  type ManageBookingStatus,
  type ManageBooking,
} from "@/pages/ManageBookingPagesFolder/manageBookingData";
import useAsyncValue from "@/hooks/useAsyncValue";

const ManageBookingsPage = () => {
  const [activeTab, setActiveTab] = useState<ManageBookingStatus>("upcoming");
  const { data: loadedBookings } = useAsyncValue(loadManageBookings);
  const bookingsData = loadedBookings ?? [];

  const counts = useMemo(() => {
    return bookingsData.reduce(
      (acc: Record<ManageBookingStatus, number>, booking: ManageBooking) => {
        acc[booking.status] += 1;
        return acc;
      },
      { upcoming: 0, past: 0, cancelled: 0 },
    );
  }, [bookingsData]);

  const bookings = useMemo(
    () =>
      bookingsData.filter(
        (booking: ManageBooking) => booking.status === activeTab,
      ),
    [activeTab, bookingsData],
  );

  const tabs: { id: ManageBookingStatus; label: string }[] = [
    { id: "upcoming", label: "Upcoming" },
    { id: "past", label: "Past" },
    { id: "cancelled", label: "Cancelled" },
  ];

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7]">
      {/* HEADER SECTION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-5xl px-4 py-6 md:px-8">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-[#5D7FA7]" />

              <h1 className="text-lg font-bold text-slate-800">My Bookings</h1>
            </div>

            <p className="mt-1 pb-3 text-xs text-slate-400">
              Manage your upcoming, past, and cancelled flights.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`-mb-px inline-flex items-center gap-2 border-b-2 pb-3 text-sm font-semibold transition ${
                    isActive
                      ? "border-[#5D7FA7] text-[#5D7FA7]"
                      : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {tab.label}

                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] ${
                      isActive
                        ? "bg-[#EAF0F7] text-[#5D7FA7]"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {counts[tab.id]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKINGS SECTION */}
      <section className="mx-auto w-full max-w-5xl px-4 py-6 md:px-8">
        <div className="space-y-4">
          {bookings.map((booking: ManageBooking) => {
            const statusLabel = getStatusLabel(booking.status);

            const badgeClass =
              booking.status === "upcoming"
                ? "bg-[#EAF0F7] text-[#5D7FA7]"
                : getStatusBadgeClass(booking.status);

            return (
              <Link
                key={booking.id}
                to={ROUTES.MANAGE_BOOKING_DETAIL.replace(":id", booking.id)}
                className="flex w-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF0F7] text-[#5D7FA7]">
                    <Plane className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-base font-semibold text-slate-800">
                        {booking.fromCode} {"->"} {booking.toCode}
                      </p>

                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] ${badgeClass}`}
                      >
                        {statusLabel}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500">
                      {booking.fromCity} {"->"} {booking.toCity}
                    </p>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-8">
                  <div className="grid w-full grid-cols-2 gap-4 text-xs text-slate-500 sm:ml-auto sm:w-auto sm:flex sm:items-center sm:gap-10 sm:text-right">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Date
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-700">
                        {booking.date}
                      </p>

                      <p className="text-[11px] text-slate-400">
                        {booking.departTime} - {booking.cabin}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        PNR
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#5D7FA7]">
                        {booking.pnr}
                      </p>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Total
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {formatPeso(booking.total)}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="hidden h-5 w-5 text-slate-300 sm:block" />
                </div>
              </Link>
            );
          })}

          {bookings.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
              No bookings found in this category.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ManageBookingsPage;
````

## File: src/pages/ManageBookingPagesFolder/manageBookingData.ts
````typescript
import { getBookingDetail, getBookingsForUser } from "@/api/bookings.api";
import { BOOKING_DATA } from "@/pages/BookingPagesFolder/bookingData";
import type { Booking, BookingDetail } from "@/types";

export type ManageBookingStatus = "upcoming" | "past" | "cancelled";

export type ManageBooking = {
  id: string;
  status: ManageBookingStatus;
  pnr: string;
  flightCode: string;
  fromCode: string;
  toCode: string;
  fromCity: string;
  toCity: string;
  departTime: string;
  arriveTime: string;
  date: string;
  duration: string;
  cabin: string;
  seat: string;
  passengers: string;
  meal: string;
  bookingDate: string;
  total: number;
  cancellationFee: number;
};

export const formatPeso = (value: number) =>
  `P${value.toLocaleString("en-US")}`;

export const getStatusLabel = (status: ManageBookingStatus) => {
  if (status === "past") {
    return "Past";
  }
  if (status === "cancelled") {
    return "Cancelled";
  }
  return "Upcoming";
};

export const getStatusBadgeClass = (status: ManageBookingStatus) => {
  if (status === "past") {
    return "bg-slate-100 text-slate-500";
  }
  if (status === "cancelled") {
    return "bg-rose-100 text-rose-600";
  }
  return "bg-[#EAF0F7] text-[#5D7FA7]";
};

export const getManageBookingById = () => {
  // This originally looked in MANAGE_BOOKINGS mock, now it will just return undefined
  // if not found in the newly loaded data (handled by loadManageBookingById)
  return undefined;
};

const toManageBookingStatus = (
  status?: Booking["status"],
  departureTime?: string,
): ManageBookingStatus => {
  if (status === "cancelled" || status === "refunded") {
    return "cancelled";
  }

  if (departureTime) {
    const departureDate = new Date(departureTime);
    if (!Number.isNaN(departureDate.getTime()) && departureDate < new Date()) {
      return "past";
    }
  }

  return "upcoming";
};

const toTimeLabel = (isoValue?: string) => {
  if (!isoValue) {
    return "--:--";
  }

  const date = new Date(isoValue);
  if (Number.isNaN(date.getTime())) {
    return isoValue.slice(11, 16) || isoValue;
  }

  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const toDuration = (departureTime?: string, arrivalTime?: string) => {
  if (!departureTime || !arrivalTime) {
    return "--";
  }

  const departure = new Date(departureTime).getTime();
  const arrival = new Date(arrivalTime).getTime();
  if (
    Number.isNaN(departure) ||
    Number.isNaN(arrival) ||
    arrival <= departure
  ) {
    return "--";
  }

  const totalMinutes = Math.round((arrival - departure) / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes.toString().padStart(2, "0")}m`;
};

const passengerLabel = (booking: Booking | BookingDetail) => {
  const count = booking.passengers?.length ?? 0;
  if (count <= 0) {
    return "1 Adult";
  }

  return `${count} Adult${count === 1 ? "" : "s"}`;
};

const mealLabel = (booking: Booking | BookingDetail) => {
  const preference = booking.passengers?.[0]?.mealPreference;
  return preference
    ? preference.charAt(0).toUpperCase() + preference.slice(1)
    : "Standard";
};

const toManageBooking = (booking: Booking | BookingDetail): ManageBooking => {
  const flight = booking.flight;
  const origin = flight?.origin ?? BOOKING_DATA.fromCode;
  const destination = flight?.destination ?? BOOKING_DATA.toCode;
  const departureTime = flight?.departureTime ?? booking.createdAt;
  const arrivalTime =
    flight?.arrivalTime ?? booking.updatedAt ?? booking.createdAt;
  const bookingDate = booking.createdAt?.split("T")[0] ?? "2026-04-10";
  const tripDate = departureTime?.split("T")[0] ?? bookingDate;
  const total = booking.totalPrice || BOOKING_DATA.total;

  return {
    id: booking.id,
    status: toManageBookingStatus(booking.status, flight?.departureTime),
    pnr: booking.pnr ?? booking.id.toUpperCase(),
    flightCode: flight?.flightNumber ?? BOOKING_DATA.flightCode,
    fromCode: origin,
    toCode: destination,
    fromCity: origin,
    toCity: destination,
    departTime: toTimeLabel(departureTime),
    arriveTime: toTimeLabel(arrivalTime),
    date: tripDate,
    duration: toDuration(departureTime, arrivalTime),
    cabin: flight?.airline ? "Economy" : BOOKING_DATA.cabin,
    seat: booking.passengers?.[0]?.seatNumber ?? BOOKING_DATA.seat,
    passengers: passengerLabel(booking),
    meal: mealLabel(booking),
    bookingDate,
    total,
    cancellationFee: Math.round(total * 0.18),
  };
};

export const loadManageBookings = async (): Promise<ManageBooking[]> => {
  try {
    const bookings = await getBookingsForUser();
    return bookings.map(toManageBooking);
  } catch {
    return [];
  }
};

export const loadManageBookingById = async (
  id?: string,
): Promise<ManageBooking | null> => {
  if (!id) {
    return null;
  }

  try {
    const booking = await getBookingDetail(id);
    return booking ? toManageBooking(booking) : null;
  } catch {
    return null;
  }
};
````

## File: src/pages/SearchResultsPage/index.ts
````typescript
export { default } from "./SearchResultsPage";
export * from "./searchResults.utils";
````

## File: src/pages/SearchResultsPage/searchResults.utils.ts
````typescript
import { ROUTES } from "@/constants/routes";
import type { CabinClass, Flight, FlightSearchParams } from "@/types";

// --- Constants ---

export const PRICE_FILTER_MIN = 1_000;
export const PRICE_FILTER_MAX = 50_000;
export const PRICE_FILTER_DEFAULT = PRICE_FILTER_MAX;

export const DEPARTURE_TIME_OPTIONS = [
  { id: "morning", label: "Morning (6AM–12PM)", startHour: 6, endHour: 12 },
  { id: "afternoon", label: "Afternoon (12PM–6PM)", startHour: 12, endHour: 18 },
  { id: "evening", label: "Evening (6PM+)", startHour: 18, endHour: 24 },
] as const;

export type DepartureTimeFilterId =
  (typeof DEPARTURE_TIME_OPTIONS)[number]["id"];

export const DEFAULT_SEARCH_CRITERIA = {
  origin: "Manila",
  originCode: "MNL",
  destination: "Cebu",
  destinationCode: "CEB",
  date: "2026-04-19",
  passengers: 1,
  cabinClass: "economy" as const,
};

/** Demo inventory aligned with the search-results mockup (MNL → CEB). */
export const MOCK_SEARCH_FLIGHTS: Flight[] = [
  {
    id: "pa-2191",
    flightNumber: "PA 2191",
    origin: "MNL",
    destination: "CEB",
    departureTime: "2026-04-19T06:00:00",
    arrivalTime: "2026-04-19T07:20:00",
    price: 1890,
    airline: "Philippine Airlines",
    seatsAvailable: 24,
    status: "on_time",
    cabinClass: "economy",
    baggageAllowanceKg: 20,
    stops: 0,
  },
  {
    id: "cp-1842",
    flightNumber: "CP 1842",
    origin: "MNL",
    destination: "CEB",
    departureTime: "2026-04-19T09:15:00",
    arrivalTime: "2026-04-19T10:40:00",
    price: 1650,
    airline: "Cebu Pacific",
    seatsAvailable: 18,
    status: "on_time",
    cabinClass: "economy",
    baggageAllowanceKg: 20,
    stops: 0,
  },
  {
    id: "ai-504",
    flightNumber: "AI 504",
    origin: "MNL",
    destination: "CEB",
    departureTime: "2026-04-19T15:00:00",
    arrivalTime: "2026-04-19T16:20:00",
    price: 1490,
    airline: "AirAsia",
    seatsAvailable: 4,
    status: "on_time",
    cabinClass: "economy",
    baggageAllowanceKg: 20,
    stops: 0,
  },
];

// --- Types ---

export type SearchCriteria = {
  origin: string;
  originCode: string;
  destination: string;
  destinationCode: string;
  date: string;
  passengers: number;
  cabinClass: CabinClass;
};

export type SearchFiltersState = {
  maxPrice: number;
  directOnly: boolean;
  departureTimes: DepartureTimeFilterId[];
};

export type FlightDisplayMeta = {
  airlineName: string;
  airlineInitials: string;
  aircraft: string;
  durationLabel: string;
};

// --- API / display helpers ---

export function isBackendConfigured(): boolean {
  const apiUrl = import.meta.env.VITE_API_URL;
  if (!apiUrl || typeof apiUrl !== "string") return false;
  if (apiUrl.includes("xxxx")) return false;
  try {
    const parsed = new URL(apiUrl);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

const AIRCRAFT_BY_AIRLINE: Record<string, string> = {
  "Philippine Airlines": "Airbus A320",
  "Cebu Pacific": "Airbus A320",
  AirAsia: "Airbus A320neo",
};

const AIRLINE_INITIALS: Record<string, string> = {
  "Philippine Airlines": "PA",
  "Cebu Pacific": "CP",
  AirAsia: "AI",
};

const AIRPORT_DIRECTORY: Record<string, { city: string; code: string }> = {
  manila: { city: "Manila", code: "MNL" },
  mnl: { city: "Manila", code: "MNL" },
  cebu: { city: "Cebu", code: "CEB" },
  ceb: { city: "Cebu", code: "CEB" },
  davao: { city: "Davao", code: "DVO" },
  dvo: { city: "Davao", code: "DVO" },
  palawan: { city: "Palawan", code: "PPS" },
  pps: { city: "Puerto Princesa", code: "PPS" },
  boracay: { city: "Boracay", code: "KLO" },
  kalibo: { city: "Kalibo (Boracay)", code: "KLO" },
  klo: { city: "Kalibo (Boracay)", code: "KLO" },
  singapore: { city: "Singapore", code: "SIN" },
  sin: { city: "Singapore", code: "SIN" },
  "hong kong": { city: "Hong Kong", code: "HKG" },
  hkg: { city: "Hong Kong", code: "HKG" },
};

export function formatPhp(amount: number): string {
  return `₱${amount.toLocaleString("en-PH")}`;
}

export function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-PH", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function getDurationMinutes(departure: string, arrival: string): number {
  const start = new Date(departure).getTime();
  const end = new Date(arrival).getTime();
  return Math.max(Math.round((end - start) / 60_000), 0);
}

export function formatDuration(departure: string, arrival: string): string {
  const totalMinutes = getDurationMinutes(departure, arrival);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours === 0) return `${minutes}m`;
  if (minutes === 0) return `${hours}h`;
  return `${hours}h ${minutes}m`;
}

export function getAirlineInitials(name?: string): string {
  if (!name) return "SL";
  if (AIRLINE_INITIALS[name]) return AIRLINE_INITIALS[name];
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return parts
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function getFlightDisplayMeta(flight: Flight): FlightDisplayMeta {
  const airlineName = flight.airline ?? "SkyLink";
  return {
    airlineName,
    airlineInitials: getAirlineInitials(airlineName),
    aircraft: AIRCRAFT_BY_AIRLINE[airlineName] ?? "Aircraft",
    durationLabel: formatDuration(flight.departureTime, flight.arrivalTime),
  };
}

export function resolveAirportFromInput(
  input: string,
  fallback: { city: string; code: string },
): { city: string; code: string } {
  const key = input.trim().toLowerCase();
  if (!key) return fallback;
  if (AIRPORT_DIRECTORY[key]) return AIRPORT_DIRECTORY[key];
  if (/^[a-z]{3}$/i.test(key)) {
    const match = Object.values(AIRPORT_DIRECTORY).find(
      (airport) => airport.code.toLowerCase() === key,
    );
    if (match) return match;
    return { city: key.toUpperCase(), code: key.toUpperCase() };
  }
  return { city: input.trim(), code: fallback.code };
}

export function mapUiCabinToApi(cabin: string): CabinClass {
  const normalized = cabin.trim().toLowerCase();
  if (normalized === "business") return "business";
  if (normalized === "first") return "first";
  if (normalized === "premium economy" || normalized === "premium_economy") {
    return "premium_economy";
  }
  return "economy";
}

export function formatCabinLabel(cabin: CabinClass): string {
  const labels: Record<CabinClass, string> = {
    economy: "Economy",
    premium_economy: "Premium Economy",
    business: "Business",
    first: "First",
  };
  return labels[cabin];
}

export function buildSearchResultsPath(criteria: SearchCriteria): string {
  const query = buildResultsQueryString(criteria, {
    maxPrice: PRICE_FILTER_DEFAULT,
    directOnly: false,
    departureTimes: [],
  });
  return `${ROUTES.SEARCH_RESULTS}?${query}`;
}

export function parseSearchCriteriaFromParams(
  params: URLSearchParams,
  defaults: SearchCriteria,
): SearchCriteria {
  const cabin = params.get("cabinClass") as CabinClass | null;
  return {
    origin: params.get("origin") ?? defaults.origin,
    originCode: params.get("originCode") ?? defaults.originCode,
    destination: params.get("destination") ?? defaults.destination,
    destinationCode: params.get("destinationCode") ?? defaults.destinationCode,
    date: params.get("date") ?? defaults.date,
    passengers: Number(params.get("passengers") ?? defaults.passengers) || 1,
    cabinClass:
      cabin === "premium_economy" ||
      cabin === "business" ||
      cabin === "first" ||
      cabin === "economy"
        ? cabin
        : defaults.cabinClass,
  };
}

export function buildFlightSearchParams(
  criteria: SearchCriteria,
  filters: SearchFiltersState,
): FlightSearchParams {
  const params: FlightSearchParams = {
    origin: criteria.originCode,
    destination: criteria.destinationCode,
    date: criteria.date,
    passengers: criteria.passengers,
    cabinClass: criteria.cabinClass,
    maxPrice: filters.maxPrice,
  };
  if (filters.directOnly) params.stops = 0;
  const selectedWindows = DEPARTURE_TIME_OPTIONS.filter((option) =>
    filters.departureTimes.includes(option.id),
  );
  if (selectedWindows.length === 1) {
    const window = selectedWindows[0];
    params.departureWindowStart = `${String(window.startHour).padStart(2, "0")}:00`;
    params.departureWindowEnd = `${String(window.endHour).padStart(2, "0")}:00`;
  }
  return params;
}

function matchesDepartureWindow(
  departureTime: string,
  selected: DepartureTimeFilterId[],
): boolean {
  if (selected.length === 0) return true;
  const hour = new Date(departureTime).getHours();
  return selected.some((id) => {
    const option = DEPARTURE_TIME_OPTIONS.find((item) => item.id === id);
    if (!option) return false;
    return hour >= option.startHour && hour < option.endHour;
  });
}

export function applyClientFilters(
  flights: Flight[],
  filters: SearchFiltersState,
): Flight[] {
  return flights.filter((flight) => {
    if (flight.price > filters.maxPrice) return false;
    if (filters.directOnly && (flight.stops ?? 0) > 0) return false;
    if (!matchesDepartureWindow(flight.departureTime, filters.departureTimes)) {
      return false;
    }
    return true;
  });
}

export function buildResultsQueryString(
  criteria: SearchCriteria,
  filters: SearchFiltersState,
): string {
  const params = new URLSearchParams({
    origin: criteria.origin,
    originCode: criteria.originCode,
    destination: criteria.destination,
    destinationCode: criteria.destinationCode,
    date: criteria.date,
    passengers: String(criteria.passengers),
    cabinClass: criteria.cabinClass,
    maxPrice: String(filters.maxPrice),
    directOnly: String(filters.directOnly),
  });
  if (filters.departureTimes.length > 0) {
    params.set("departureTimes", filters.departureTimes.join(","));
  }
  return params.toString();
}

export function parseFiltersFromParams(
  params: URLSearchParams,
  defaultMaxPrice: number,
): SearchFiltersState {
  const departureRaw = params.get("departureTimes");
  const departureTimes = departureRaw
    ? (departureRaw.split(",").filter(Boolean) as DepartureTimeFilterId[])
    : [];
  return {
    maxPrice: Number(params.get("maxPrice") ?? defaultMaxPrice) || defaultMaxPrice,
    directOnly: params.get("directOnly") === "true",
    departureTimes,
  };
}
````

## File: src/pages/SearchResultsPage/SearchResultsPage.tsx
````typescript
import { useCallback, useEffect, useMemo, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { HiArrowLeft } from "react-icons/hi2";
import { LuLuggage } from "react-icons/lu";
import { PiAirplaneTilt } from "react-icons/pi";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { searchFlights } from "@/api/flights.api";
import EmptyState from "@/pages/_shared/components/ui/EmptyState";
import ErrorState from "@/pages/_shared/components/ui/ErrorState";
import Skeleton from "@/pages/_shared/components/ui/Skeleton";
import { ROUTES } from "@/constants/routes";
import { colors, typography } from "@/constants/theme";
import { useBookingFlowStore } from "@/store/useBookingFlowStore";
import { cn } from "@/utils/cn";
import type { Flight } from "@/types";
import {
  DEFAULT_SEARCH_CRITERIA,
  DEPARTURE_TIME_OPTIONS,
  MOCK_SEARCH_FLIGHTS,
  PRICE_FILTER_DEFAULT,
  PRICE_FILTER_MAX,
  PRICE_FILTER_MIN,
  applyClientFilters,
  buildFlightSearchParams,
  buildResultsQueryString,
  formatCabinLabel,
  formatPhp,
  formatTime,
  getFlightDisplayMeta,
  isBackendConfigured,
  parseFiltersFromParams,
  parseSearchCriteriaFromParams,
  type DepartureTimeFilterId,
  type SearchCriteria,
  type SearchFiltersState,
} from "./searchResults.utils";

function useSearchResultsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [criteria] = useState<SearchCriteria>(() =>
    parseSearchCriteriaFromParams(searchParams, DEFAULT_SEARCH_CRITERIA),
  );
  const [filters, setFilters] = useState<SearchFiltersState>(() =>
    parseFiltersFromParams(searchParams, PRICE_FILTER_DEFAULT),
  );
  const [flights, setFlights] = useState<Flight[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiParams = useMemo(
    () => buildFlightSearchParams(criteria, filters),
    [criteria, filters],
  );
  const filteredFlights = useMemo(
    () => applyClientFilters(flights, filters),
    [flights, filters],
  );

  const syncUrl = useCallback(
    (nextCriteria: SearchCriteria, nextFilters: SearchFiltersState) => {
      setSearchParams(buildResultsQueryString(nextCriteria, nextFilters), {
        replace: true,
      });
    },
    [setSearchParams],
  );

  const fetchFlights = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    if (!isBackendConfigured()) {
      setFlights(MOCK_SEARCH_FLIGHTS);
      setIsLoading(false);
      return;
    }

    try {
      const response = await searchFlights(apiParams);
      setFlights(response.length > 0 ? response : MOCK_SEARCH_FLIGHTS);
    } catch {
      setFlights(MOCK_SEARCH_FLIGHTS);
      setError(null);
    } finally {
      setIsLoading(false);
    }
  }, [apiParams]);

  useEffect(() => {
    fetchFlights();
  }, [fetchFlights]);

  const updateFilters = useCallback(
    (patch: Partial<SearchFiltersState>) => {
      setFilters((previous) => {
        const next = { ...previous, ...patch };
        syncUrl(criteria, next);
        return next;
      });
    },
    [criteria, syncUrl],
  );

  return {
    criteria,
    filters,
    flights: filteredFlights,
    isLoading,
    error,
    refetch: fetchFlights,
    updateFilters,
  };
}

function SearchSummaryBar({
  criteria,
  filters,
}: {
  criteria: SearchCriteria;
  filters: SearchFiltersState;
}) {
  const editSearchHref = `${ROUTES.BOOK}?${buildResultsQueryString(criteria, filters)}`;

  return (
    <section className="border-b border-tertiary-20 bg-bg-page">
      <div className="mx-auto flex max-w-[1131px] items-center justify-between gap-4 px-4 py-4 md:px-6 md:py-5">
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-3 gap-y-1">
          <Link
            to={ROUTES.HOME}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5",
              typography.label.sm.semiBold,
              colors.text.link,
            )}
          >
            <HiArrowLeft className="size-4 shrink-0" aria-hidden />
            Home
          </Link>
          <span className="hidden h-4 w-px shrink-0 bg-tertiary-30 sm:block" aria-hidden />
          <p className={cn(typography.label.md.bold, colors.text.primary)}>
            {criteria.origin} → {criteria.destination}
          </p>
          <p className={cn(typography.paragraph.sm.medium, colors.text.secondary)}>
            {criteria.date}
            <span className="hidden sm:inline">
              {" "}
              · {criteria.passengers} pax · {formatCabinLabel(criteria.cabinClass)}
            </span>
          </p>
        </div>
        <Link
          to={editSearchHref}
          className={cn(
            "inline-flex shrink-0",
            colors.action.ghost,
            typography.label.sm.semiBold,
            "h-10 items-center justify-center rounded-[10px] px-4 transition-colors hover:bg-primary-10",
          )}
        >
          Edit Search
        </Link>
      </div>
    </section>
  );
}

function SearchFiltersPanel({
  filters,
  onFiltersChange,
}: {
  filters: SearchFiltersState;
  onFiltersChange: (patch: Partial<SearchFiltersState>) => void;
}) {
  const toggleDepartureTime = (id: DepartureTimeFilterId) => {
    const departureTimes = filters.departureTimes.includes(id)
      ? filters.departureTimes.filter((value) => value !== id)
      : [...filters.departureTimes, id];
    onFiltersChange({ departureTimes });
  };

  return (
    <aside className="rounded-[14px] border border-tertiary-30 bg-bg-page p-5 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
      <h2 className={cn(typography.heading.h5.bold, colors.text.primary, "mb-5")}>
        Filters
      </h2>
      <div className="flex flex-col gap-6">
        <fieldset className="flex flex-col gap-3">
          <legend
            className={cn(
              typography.label.xs.bold,
              colors.text.tertiary,
              "uppercase tracking-wide",
            )}
          >
            Max Price
          </legend>
          <p className={cn(typography.heading.h4.bold, colors.text.primary)}>
            {formatPhp(filters.maxPrice)}
          </p>
          <input
            type="range"
            min={PRICE_FILTER_MIN}
            max={PRICE_FILTER_MAX}
            step={100}
            value={filters.maxPrice}
            onChange={(event) =>
              onFiltersChange({ maxPrice: Number(event.target.value) })
            }
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-tertiary-20 accent-primary-60"
            aria-label="Maximum price"
          />
          <div className="flex justify-between">
            <span className={cn(typography.paragraph.xs.medium, colors.text.tertiary)}>
              {formatPhp(PRICE_FILTER_MIN)}
            </span>
            <span className={cn(typography.paragraph.xs.medium, colors.text.tertiary)}>
              {formatPhp(PRICE_FILTER_MAX)}
            </span>
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-3">
          <legend
            className={cn(
              typography.label.xs.bold,
              colors.text.tertiary,
              "uppercase tracking-wide",
            )}
          >
            Stops
          </legend>
          <label className="flex cursor-pointer items-center gap-2.5">
            <input
              type="checkbox"
              checked={filters.directOnly}
              onChange={(event) =>
                onFiltersChange({ directOnly: event.target.checked })
              }
              className="size-4 rounded border-tertiary-40 text-primary-60 focus:ring-primary-40"
            />
            <span className={cn(typography.paragraph.sm.normal, colors.text.primary)}>
              Direct flights only
            </span>
          </label>
        </fieldset>
        <fieldset className="flex flex-col gap-3">
          <legend
            className={cn(
              typography.label.xs.bold,
              colors.text.tertiary,
              "uppercase tracking-wide",
            )}
          >
            Departure Time
          </legend>
          <div className="flex flex-col gap-2.5">
            {DEPARTURE_TIME_OPTIONS.map((option) => (
              <label
                key={option.id}
                className="flex cursor-pointer items-center gap-2.5"
              >
                <input
                  type="checkbox"
                  checked={filters.departureTimes.includes(option.id)}
                  onChange={() => toggleDepartureTime(option.id)}
                  className="size-4 rounded border-tertiary-40 text-primary-60 focus:ring-primary-40"
                />
                <span className={cn(typography.paragraph.sm.normal, colors.text.primary)}>
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>
    </aside>
  );
}

function FlightTimeline({
  flight,
  durationLabel,
}: {
  flight: Flight;
  durationLabel: string;
}) {
  const isNonStop = (flight.stops ?? 0) === 0;

  return (
    <div className="w-full min-w-0 lg:max-w-[340px]">
      <p
        className={cn(
          "mb-2 text-center",
          typography.paragraph.xs.medium,
          colors.text.secondary,
        )}
      >
        {durationLabel}
      </p>
      <div className="grid grid-cols-[72px_1fr_72px] items-center gap-2">
        <div className="text-right">
          <p className={cn(typography.label.md.bold, colors.text.primary)}>
            {formatTime(flight.departureTime)}
          </p>
          <p className={cn(typography.paragraph.xs.medium, colors.text.secondary)}>
            {flight.origin}
          </p>
        </div>
        <div className="flex items-center px-1">
          <span className="h-px flex-1 bg-tertiary-30" />
          <span
            className="mx-2 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-10 text-primary-60"
            aria-hidden
          >
            <PiAirplaneTilt className="size-3.5" />
          </span>
          <span className="h-px flex-1 bg-tertiary-30" />
        </div>
        <div className="text-left">
          <p className={cn(typography.label.md.bold, colors.text.primary)}>
            {formatTime(flight.arrivalTime)}
          </p>
          <p className={cn(typography.paragraph.xs.medium, colors.text.secondary)}>
            {flight.destination}
          </p>
        </div>
      </div>
      <p
        className={cn(
          "mt-2 text-center",
          typography.label.xs.semiBold,
          isNonStop ? "text-success-60" : colors.text.secondary,
        )}
      >
        {isNonStop
          ? "Non-stop"
          : (flight.stops ?? 0) === 1
            ? "1 stop"
            : `${flight.stops} stops`}
      </p>
    </div>
  );
}

function FlightResultCard({ flight }: { flight: Flight }) {
  const navigate = useNavigate();
  const { startFlow } = useBookingFlowStore();
  const meta = getFlightDisplayMeta(flight);
  const cabinLabel = formatCabinLabel(flight.cabinClass ?? "economy");
  const lowSeats =
    flight.seatsAvailable !== undefined && flight.seatsAvailable <= 5;

  return (
    <article className="rounded-[14px] border border-tertiary-30 bg-bg-page p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] md:p-5">
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[200px_minmax(260px,1fr)_auto_auto] lg:items-center lg:gap-6">
        <div className="flex items-center gap-3">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-10 text-sm font-bold text-primary-70"
            aria-hidden
          >
            {meta.airlineInitials}
          </div>
          <div className="min-w-0">
            <p className={cn(typography.label.sm.bold, colors.text.primary)}>
              {meta.airlineName}
            </p>
            <p className={cn(typography.paragraph.xs.medium, colors.text.secondary)}>
              {flight.flightNumber} · {meta.aircraft}
            </p>
          </div>
        </div>
        <FlightTimeline flight={flight} durationLabel={meta.durationLabel} />
        <div className="flex shrink-0 items-center gap-4 lg:gap-5">
          <div
            className={cn(
              "flex items-center gap-1.5",
              typography.paragraph.xs.medium,
              colors.text.secondary,
            )}
          >
            <LuLuggage className="size-4 shrink-0" aria-hidden />
            <span>{flight.baggageAllowanceKg ?? 0}kg</span>
          </div>
          <div
            className={cn(
              "flex items-center gap-1.5",
              typography.paragraph.xs.medium,
              "text-success-60",
            )}
          >
            <CiClock2 className="size-4 shrink-0" aria-hidden />
            <span>On time</span>
          </div>
        </div>
        <div className="flex items-end justify-between gap-4 border-t border-tertiary-20 pt-4 lg:shrink-0 lg:border-0 lg:pt-0">
          <div className="text-left lg:text-right">
            <p className={cn(typography.heading.h4.bold, "text-primary-60")}>
              {formatPhp(flight.price)}
            </p>
            <p className={cn(typography.paragraph.xs.medium, colors.text.secondary)}>
              {cabinLabel} / pax
            </p>
            {lowSeats ? (
              <p className={cn(typography.label.xs.semiBold, "mt-1 text-danger-60")}>
                {flight.seatsAvailable} seats left!
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={() => {
              startFlow(flight.id);
              navigate(ROUTES.BOOKING_PASSENGER_DETAILS);
            }}
            className={cn(
              colors.action.primary,
              colors.action.primaryHover,
              colors.action.primaryPress,
              typography.label.sm.semiBold,
              "h-10 shrink-0 rounded-[10px] px-6 transition-colors",
            )}
          >
            Select
          </button>
        </div>
      </div>
    </article>
  );
}

function FlightResultsList({
  flights,
  isLoading,
  error,
  onRetry,
}: {
  flights: Flight[];
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
}) {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4" aria-busy="true" aria-label="Loading flights">
        {[0, 1, 2].map((key) => (
          <div
            key={key}
            className="rounded-[14px] border border-tertiary-30 bg-bg-page p-5"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <Skeleton className="h-11 w-11 rounded-full" />
              <Skeleton className="h-16 flex-1" />
              <Skeleton className="h-10 w-28" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) return <ErrorState message={error} onRetry={onRetry} />;

  if (flights.length === 0) {
    return (
      <EmptyState
        title="No flights found"
        description="Try adjusting your filters or search criteria to see more results."
      />
    );
  }

  return (
    <section>
      <p
        className={cn(
          typography.paragraph.sm.medium,
          colors.text.secondary,
          "mb-4",
        )}
      >
        {flights.length} {flights.length === 1 ? "flight" : "flights"} found
      </p>
      <div className="flex flex-col gap-4">
        {flights.map((flight) => (
          <FlightResultCard key={flight.id} flight={flight} />
        ))}
      </div>
    </section>
  );
}

const SearchResultsPage = () => {
  const { criteria, filters, flights, isLoading, error, refetch, updateFilters } =
    useSearchResultsPage();

  return (
    <div className="min-h-screen bg-bg-surface">
      <SearchSummaryBar criteria={criteria} filters={filters} />
      <div className="mx-auto max-w-[1131px] px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
          <div className="w-full lg:w-[280px] lg:shrink-0">
            <SearchFiltersPanel filters={filters} onFiltersChange={updateFilters} />
          </div>
          <div className="min-w-0 flex-1">
            <FlightResultsList
              flights={flights}
              isLoading={isLoading}
              error={error}
              onRetry={refetch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
````

## File: src/pages/BookingDetailPage.tsx
````typescript
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, CreditCard, Plane, Ticket } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { formatCurrency } from "@/pages/BookingPagesFolder/bookingData";
import { useBookingDetail } from "@/hooks/useBookings";

const BookingDetailPage = () => {
  const { id } = useParams<{ id?: string }>();
  const { data: booking, isLoading } = useBookingDetail(id);

  if (isLoading) {
    return (
      <main className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-[#F3F5F7]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#496B92] border-t-transparent" />
      </main>
    );
  }

  if (!booking) {
    return (
      <main className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-[#F3F5F7]">
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-800">Booking Not Found</h2>
          <p className="mt-2 text-slate-500">
            The requested booking information is not available.
          </p>
          <Link
            to={ROUTES.MY_BOOKINGS}
            className="mt-4 inline-block text-blue-600 font-bold hover:underline"
          >
            Go back to my bookings
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7] px-6 py-8">
      <section className="mx-auto w-full max-w-6xl space-y-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link
            to={ROUTES.MY_BOOKINGS}
            className="inline-flex items-center gap-1 text-[#5D7FA7] hover:text-[#4E6B8D]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to My Bookings
          </Link>
          <span>/</span>
          <span className="font-semibold text-slate-700">{booking.pnr}</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_320px]">
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Booking Reference
                  </p>
                  <h1 className="mt-2 text-2xl font-bold text-slate-900">
                    {booking.pnr}
                  </h1>
                </div>
                <span className="rounded-full bg-[#EAF0F7] px-3 py-1 text-xs font-semibold text-[#5D7FA7]">
                  {booking.status}
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Flight
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {booking.flight?.flightNumber}
                  </p>
                  <p className="text-xs text-slate-500">
                    {booking.flight?.origin} → {booking.flight?.destination}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Travel Date
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {booking.flight?.departureTime?.split("T")[0] ?? "—"}
                  </p>
                  <p className="text-xs text-slate-500">
                    {booking.flight?.departureTime?.slice(11, 16) ?? "—"} -{" "}
                    {booking.flight?.arrivalTime?.slice(11, 16) ?? "—"}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Passengers
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {booking.passengers?.length ?? 0}
                  </p>
                  <p className="text-xs text-slate-500">
                    Seat {booking.passengers?.[0]?.seatNumber ?? "Auto"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Plane className="h-4 w-4 text-[#5D7FA7]" />
                <h2 className="text-lg font-bold text-slate-900">Itinerary</h2>
              </div>
              <div className="mt-4 space-y-3">
                {booking.itinerary?.map((segment) => (
                  <div
                    key={segment.id}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {segment.origin} → {segment.destination}
                        </p>
                        <p className="text-xs text-slate-500">
                          {segment.flightNumber}
                        </p>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                        {segment.status ?? "scheduled"}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                      <span>{segment.departureTime}</span>
                      <span>{segment.arrivalTime}</span>
                    </div>
                  </div>
                )) ?? (
                  <p className="text-center py-4 text-slate-500 text-sm italic">
                    Itinerary details not available.
                  </p>
                )}
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <Ticket className="h-4 w-4 text-[#5D7FA7]" />
                <h2 className="text-sm font-bold text-slate-900">Passenger</h2>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p className="font-semibold text-slate-800">
                  {booking.passengers?.[0]
                    ? `${booking.passengers[0].firstName} ${booking.passengers[0].lastName}`
                    : "Guest Passenger"}
                </p>
                <p>{booking.passengers?.[0]?.nationality ?? "—"}</p>
                <p>Seat {booking.passengers?.[0]?.seatNumber ?? "Auto"}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-[#5D7FA7]" />
                <h2 className="text-sm font-bold text-slate-900">
                  Payment Summary
                </h2>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Base fare</span>
                  <span>{formatCurrency(booking.baseFare ?? 0)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Taxes</span>
                  <span>{formatCurrency(booking.taxes ?? 0)}</span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-2">
                  <span className="font-semibold text-slate-900">Total</span>
                  <span className="font-semibold text-[#5D7FA7]">
                    {formatCurrency(booking.totalPrice)}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#5D7FA7]" />
                <h2 className="text-sm font-bold text-slate-900">Contact</h2>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>{booking.contactEmail ?? "—"}</p>
                <p>{booking.contactPhone ?? "—"}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default BookingDetailPage;
````

## File: src/pages/BookingPage.tsx
````typescript
import PassengerDetailsPage from "@/pages/BookingPagesFolder/PassengerDetailsPage/PassengerDetailsPage";

export default PassengerDetailsPage;
````

## File: src/pages/LoginPage.tsx
````typescript
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/hooks/useAuth";
import { loginSchema, registerSchema } from "@/validation/auth.schemas";
import type {
  LoginFormValues,
  RegisterFormValues,
} from "@/validation/auth.schemas";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Phone,
  CheckCircle2,
} from "lucide-react";

type AuthTab = "login" | "register";

interface LoginPageProps {
  defaultTab?: AuthTab;
}

const LoginPage = ({ defaultTab = "login" }: LoginPageProps) => {
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();

  const [activeTab, setActiveTab] = useState<AuthTab>(defaultTab);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);

  // Login Form
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors, isSubmitting: isLoggingIn },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  // Register Form
  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors, isSubmitting: isRegistering },
    reset: resetRegisterForm,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const handleTabChange = (tab: AuthTab) => {
    setActiveTab(tab);
    setServerError(null);
    setSuccessMsg(null);
  };

  const onLoginSubmit = async (data: LoginFormValues) => {
    setServerError(null);
    try {
      await signIn({ email: data.email, password: data.password });
      // In a real app, you'd handle rememberMe logic here
      navigate(ROUTES.HOME);
    } catch (err: unknown) {
      const axiosErr = err as { response?: { data?: { detail?: unknown } } };
      const detail = axiosErr?.response?.data?.detail;
      setServerError(
        typeof detail === "string" ? detail : "Login failed. Please try again.",
      );
    }
  };

  const onRegisterSubmit = async (data: RegisterFormValues) => {
    setServerError(null);
    try {
      await signUp({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone_number: data.phone_number,
        password: data.password,
      });
      setSuccessMsg(
        "Registration successful! Please check your email to verify your account.",
      );
      setActiveTab("login");
      resetRegisterForm();
    } catch (err: unknown) {
      const axiosErr = err as { response?: { data?: { detail?: unknown } } };
      const detail = axiosErr?.response?.data?.detail;
      setServerError(
        typeof detail === "string"
          ? detail
          : "Registration failed. Please try again.",
      );
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden px-4 py-12 md:px-6 bg-[#FDFBF8]">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-[#5E83AE]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/10 blur-[80px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-white/10 blur-[60px]" />
      </div>

      <div className="relative z-10 w-full max-w-[500px]">
        <div className="bg-white rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100">
          {/* Tab Switcher */}
          <div className="flex border-b border-slate-100 bg-slate-50/50">
            <button
              type="button"
              onClick={() => handleTabChange("login")}
              className={`flex-1 py-6 text-[15px] font-bold transition-all relative ${
                activeTab === "login"
                  ? "text-primary-60 bg-white"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Sign In
              {activeTab === "login" && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary-60" />
              )}
            </button>
            <button
              type="button"
              onClick={() => handleTabChange("register")}
              className={`flex-1 py-6 text-[15px] font-bold transition-all relative ${
                activeTab === "register"
                  ? "text-primary-60 bg-white"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Register
              {activeTab === "register" && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary-60" />
              )}
            </button>
          </div>

          <div className="p-8 md:p-10">
            {/* Feedback banners */}
            {serverError && (
              <div className="mb-6 rounded-2xl border border-danger-20 bg-danger-5 px-4 py-3 text-sm text-danger-60 font-medium flex gap-3 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-danger-60 shrink-0" />
                {serverError}
              </div>
            )}
            {successMsg && (
              <div className="mb-6 rounded-2xl border border-success-20 bg-success-5 px-4 py-3 text-sm text-success-60 font-medium flex gap-3 items-center">
                <CheckCircle2 size={18} className="shrink-0" />
                {successMsg}
              </div>
            )}

            {activeTab === "login" ? (
              <form
                className="space-y-6"
                onSubmit={handleLoginSubmit(onLoginSubmit)}
                noValidate
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                      Email
                    </label>
                    <div
                      className={`flex items-center gap-3 rounded-2xl border bg-slate-50 px-4 h-14 transition-all focus-within:bg-white focus-within:ring-4 focus-within:ring-primary-60/5 ${loginErrors.email ? "border-danger-40" : "border-slate-200 focus-within:border-primary-60"}`}
                    >
                      <Mail size={18} className="text-slate-400" />
                      <input
                        type="email"
                        placeholder="your@email.com"
                        {...loginRegister("email")}
                        className="w-full bg-transparent text-[15px] outline-none font-medium text-slate-700"
                      />
                    </div>
                    {loginErrors.email && (
                      <p className="text-xs text-danger-60 font-bold ml-1">
                        {loginErrors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                      Password
                    </label>
                    <div
                      className={`flex items-center gap-3 rounded-2xl border bg-slate-50 px-4 h-14 transition-all focus-within:bg-white focus-within:ring-4 focus-within:ring-primary-60/5 ${loginErrors.password ? "border-danger-40" : "border-slate-200 focus-within:border-primary-60"}`}
                    >
                      <Lock size={18} className="text-slate-400" />
                      <input
                        type={showLoginPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...loginRegister("password")}
                        className="w-full bg-transparent text-[15px] outline-none font-medium text-slate-700"
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="text-slate-300 hover:text-slate-500"
                      >
                        {showLoginPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                    {loginErrors.password && (
                      <p className="text-xs text-danger-60 font-bold ml-1">
                        {loginErrors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between px-1">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="peer sr-only"
                      />
                      <div className="w-5 h-5 border-2 border-slate-200 rounded-md transition-all peer-checked:bg-primary-60 peer-checked:border-primary-60 group-hover:border-primary-60/50" />
                      <CheckCircle2
                        size={12}
                        className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                      />
                    </div>
                    <span className="text-[13px] font-bold text-slate-500 group-hover:text-slate-700">
                      Remember me
                    </span>
                  </label>
                  <Link
                    to={ROUTES.FORGOT_PASSWORD}
                    className="text-[13px] font-bold text-primary-60 hover:text-primary-80"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full h-14 rounded-2xl bg-primary-60 hover:bg-primary-70 active:scale-[0.98] text-white font-bold shadow-xl shadow-primary-60/20 transition-all disabled:opacity-50 disabled:active:scale-100"
                >
                  {isLoggingIn ? "Signing in..." : "Sign In"}
                </button>
              </form>
            ) : (
              <form
                className="space-y-5"
                onSubmit={handleRegisterSubmit(onRegisterSubmit)}
                noValidate
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      First Name
                    </label>
                    <div
                      className={`flex items-center gap-3 rounded-xl border bg-slate-50 px-4 h-12 transition-all focus-within:bg-white ${registerErrors.first_name ? "border-danger-40" : "border-slate-200 focus-within:border-primary-60"}`}
                    >
                      <User size={16} className="text-slate-400" />
                      <input
                        type="text"
                        placeholder="John"
                        {...registerRegister("first_name")}
                        className="w-full bg-transparent text-[14px] outline-none font-medium"
                      />
                    </div>
                    {registerErrors.first_name && (
                      <p className="text-[10px] text-danger-60 font-bold">
                        {registerErrors.first_name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Last Name
                    </label>
                    <div
                      className={`flex items-center gap-3 rounded-xl border bg-slate-50 px-4 h-12 transition-all focus-within:bg-white ${registerErrors.last_name ? "border-danger-40" : "border-slate-200 focus-within:border-primary-60"}`}
                    >
                      <input
                        type="text"
                        placeholder="Doe"
                        {...registerRegister("last_name")}
                        className="w-full bg-transparent text-[14px] outline-none font-medium ml-2"
                      />
                    </div>
                    {registerErrors.last_name && (
                      <p className="text-[10px] text-danger-60 font-bold">
                        {registerErrors.last_name.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <div
                    className={`flex items-center gap-3 rounded-xl border bg-slate-50 px-4 h-12 transition-all focus-within:bg-white ${registerErrors.email ? "border-danger-40" : "border-slate-200 focus-within:border-primary-60"}`}
                  >
                    <Mail size={16} className="text-slate-400" />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      {...registerRegister("email")}
                      className="w-full bg-transparent text-[14px] outline-none font-medium"
                    />
                  </div>
                  {registerErrors.email && (
                    <p className="text-[10px] text-danger-60 font-bold">
                      {registerErrors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Phone Number (Optional)
                  </label>
                  <div
                    className={`flex items-center gap-3 rounded-xl border bg-slate-50 px-4 h-12 transition-all focus-within:bg-white ${registerErrors.phone_number ? "border-danger-40" : "border-slate-200 focus-within:border-primary-60"}`}
                  >
                    <Phone size={16} className="text-slate-400" />
                    <input
                      type="tel"
                      placeholder="+1234567890"
                      {...registerRegister("phone_number")}
                      className="w-full bg-transparent text-[14px] outline-none font-medium"
                    />
                  </div>
                  {registerErrors.phone_number && (
                    <p className="text-[10px] text-danger-60 font-bold">
                      {registerErrors.phone_number.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Password
                  </label>
                  <div
                    className={`flex items-center gap-3 rounded-xl border bg-slate-50 px-4 h-12 transition-all focus-within:bg-white ${registerErrors.password ? "border-danger-40" : "border-slate-200 focus-within:border-primary-60"}`}
                  >
                    <Lock size={16} className="text-slate-400" />
                    <input
                      type={showRegisterPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...registerRegister("password")}
                      className="w-full bg-transparent text-[14px] outline-none font-medium"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowRegisterPassword(!showRegisterPassword)
                      }
                      className="text-slate-300 hover:text-slate-500"
                    >
                      {showRegisterPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                  {registerErrors.password && (
                    <p className="text-[10px] text-danger-60 font-bold leading-tight">
                      {registerErrors.password.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Confirm Password
                  </label>
                  <div
                    className={`flex items-center gap-3 rounded-xl border bg-slate-50 px-4 h-12 transition-all focus-within:bg-white ${registerErrors.confirmPassword ? "border-danger-40" : "border-slate-200 focus-within:border-primary-60"}`}
                  >
                    <Lock size={16} className="text-slate-400" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...registerRegister("confirmPassword")}
                      className="w-full bg-transparent text-[14px] outline-none font-medium"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="text-slate-300 hover:text-slate-500"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                  {registerErrors.confirmPassword && (
                    <p className="text-[10px] text-danger-60 font-bold">
                      {registerErrors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isRegistering}
                  className="w-full h-14 rounded-2xl bg-primary-60 hover:bg-primary-70 active:scale-[0.98] text-white font-bold shadow-xl shadow-primary-60/20 transition-all mt-2 disabled:opacity-50"
                >
                  {isRegistering ? "Creating account..." : "Create Account"}
                </button>
                <p className="text-center text-[12px] text-slate-400 font-medium">
                  By registering, you agree to our{" "}
                  <span className="text-primary-60 hover:underline cursor-pointer">
                    Terms & Privacy Policy
                  </span>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
````

## File: src/pages/MyBookingsPage.tsx
````typescript
import { useEffect } from "react";
import { useMyBookings } from "@/hooks/useBookings";
import DataTable, { type TableColumn } from "@/pages/_shared/components/ui/DataTable";
import StatusBadge from "@/pages/_shared/components/ui/StatusBadge";
import { Ticket, Plane, Calendar, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import type { Booking } from "@/types";

const MyBookingsPage = () => {
  const { data: bookings, isLoading, refetch } = useMyBookings();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const columns: TableColumn<Booking>[] = [
    {
      key: "pnr",
      header: "PNR",
      cell: (row) => <span className="font-bold text-blue-600 uppercase">{row.pnr || "—"}</span>,
    },
    {
      key: "flight",
      header: "FLIGHT",
      cell: (row) => (
        <div className="flex items-center gap-2">
          <Plane size={14} className="text-slate-400" />
          <span className="font-medium text-slate-700">{row.flight?.flightNumber || "PR 2191"}</span>
        </div>
      ),
    },
    {
      key: "route",
      header: "ROUTE",
      cell: (row) => (
        <span className="text-slate-600 font-medium">
          {row.flight?.origin || "MNL"} → {row.flight?.destination || "CEB"}
        </span>
      ),
    },
    {
      key: "date",
      header: "DEPARTURE",
      cell: (row) => (
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Calendar size={14} />
          {row.flight?.departureTime ? new Date(row.flight.departureTime).toLocaleDateString() : "2026-04-12"}
        </div>
      ),
    },
    {
      key: "amount",
      header: "AMOUNT",
      cell: (row) => (
        <div className="flex items-center gap-1 font-bold text-slate-900">
          <CreditCard size={14} className="text-slate-400" />
          ₱{(row.totalPrice || 3150).toLocaleString()}
        </div>
      ),
    },
    {
      key: "status",
      header: "STATUS",
      cell: (row) => <StatusBadge label={row.status || "confirmed"} />,
    },
    {
      key: "action",
      header: "",
      cell: (row) => (
        <Link 
          to={ROUTES.BOOKING_DETAIL.replace(":id", row.id)}
          className="text-blue-600 font-bold hover:underline text-xs"
        >
          Details
        </Link>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100 text-primary-60">
            <Ticket size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">My Bookings</h1>
            <p className="text-sm font-medium text-slate-500">Manage your flight reservations and itineraries.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
          <DataTable
            columns={columns}
            rows={bookings || []}
            rowKey={(row) => row.id}
            emptyState={
              <div className="py-20 text-center">
                {isLoading ? (
                  <div className="animate-spin size-8 border-4 border-[#496B92] border-t-transparent rounded-full mx-auto" />
                ) : (
                  <div className="space-y-4">
                    <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-slate-50 text-slate-300">
                      <Ticket size={32} />
                    </div>
                    <div>
                      <p className="text-slate-500 font-bold text-lg">No bookings found</p>
                      <p className="text-slate-400 text-sm mt-1">You haven't made any reservations yet.</p>
                    </div>
                    <Link 
                      to={ROUTES.BOOK}
                      className="inline-block bg-primary-60 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-primary-70 transition-all shadow-lg shadow-primary-60/20"
                    >
                      Book a Flight
                    </Link>
                  </div>
                )}
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
````

## File: src/pages/PaymentPage.tsx
````typescript
import BookingPaymentPage from "@/pages/BookingPagesFolder/PaymentPage/PaymentPage";

export default BookingPaymentPage;
````

## File: src/pages/RegisterPage.tsx
````typescript
import LoginPage from "./LoginPage";

const RegisterPage = () => {
  return <LoginPage defaultTab="register" />;
};

export default RegisterPage;
````

## File: src/store/authContext.ts
````typescript
import { createContext } from "react";
import type { User } from "@/types";

export type { User };

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, user?: User | null) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
````

## File: src/store/authStore.tsx
````typescript
import React, { useEffect, useState } from "react";
import { AuthContext, type AuthContextType, type User } from "./authContext";
import { isTokenExpired } from "@/utils/token";
import { getProfile } from "@/api/auth.api";

export type { User, AuthContextType } from "./authContext";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(() => {
    try {
      const stored = localStorage.getItem("token");
      if (!stored || isTokenExpired(stored)) {
        localStorage.removeItem("token");
        return null;
      }
      return stored;
    } catch {
      return null;
    }
  });

  const [user, setUserState] = useState<User | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      if (token) {
        try {
          const profile = await getProfile();
          setUserState(profile);
        } catch {
          logout();
        }
      }
      setIsInitializing(false);
    };

    initAuth();
  }, []);

  useEffect(() => {
    try {
      if (token) localStorage.setItem("token", token);
      else localStorage.removeItem("token");
    } catch {
      // ignore localStorage errors
    }
  }, [token]);

  const login = (newToken: string, newUser: User | null = null) => {
    setToken(newToken);
    setUserState(newUser);
  };

  const logout = () => {
    setToken(null);
    setUserState(null);
    try {
      localStorage.removeItem("token");
    } catch {
      // ignore
    }
  };

  const setUser = (u: User | null) => {
    setUserState(u);
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: Boolean(token),
    login,
    logout,
    setUser,
  };

  if (isInitializing) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="size-12 animate-spin rounded-full border-4 border-primary-60 border-t-transparent" />
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
````

## File: src/store/bookingFlowContext.ts
````typescript
import { createContext } from "react";
import type { AddOn, MealPreference, Passenger } from "@/types";

export type BookingFlowStep =
  | "passengers"
  | "seats"
  | "meals"
  | "summary"
  | "payment"
  | "confirmation";

export interface BookingPricingSnapshot {
  baseFare: number;
  taxes: number;
  fees: number;
  addOns: AddOn[];
  total: number;
}

export interface BookingFlowState {
  selectedFlightId: string | null;
  passengers: Passenger[];
  seatSelections: string[];
  mealSelections: MealPreference[];
  pricing: BookingPricingSnapshot | null;
  step: BookingFlowStep;
  seatHoldExpiresAt: string | null;
  isSeatHoldExpired: boolean;
}

export interface BookingFlowContextType {
  state: BookingFlowState;
  startFlow: (flightId: string) => void;
  setStep: (step: BookingFlowStep) => void;
  setPassengers: (passengers: Passenger[]) => void;
  setSeatSelections: (seats: string[]) => void;
  setMealSelections: (meals: MealPreference[]) => void;
  setPricing: (pricing: BookingPricingSnapshot) => void;
  startSeatHold: (minutes?: number) => void;
  clearFlow: () => void;
}

export const INITIAL_BOOKING_FLOW_STATE: BookingFlowState = {
  selectedFlightId: null,
  passengers: [],
  seatSelections: [],
  mealSelections: [],
  pricing: null,
  step: "passengers",
  seatHoldExpiresAt: null,
  isSeatHoldExpired: false,
};

export const BookingFlowContext = createContext<
  BookingFlowContextType | undefined
>(undefined);
````

## File: src/store/bookingFlowStore.tsx
````typescript
import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import {
  BookingFlowContext,
  INITIAL_BOOKING_FLOW_STATE,
  type BookingFlowContextType,
  type BookingFlowState,
  type BookingPricingSnapshot,
  type BookingFlowStep,
} from "./bookingFlowContext";
import type { MealPreference, Passenger } from "@/types";

const SEAT_HOLD_DEFAULT_MINUTES = 15;

export const BookingFlowProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<BookingFlowState>(
    INITIAL_BOOKING_FLOW_STATE,
  );
  const seatHoldTimerRef = useRef<number | null>(null);

  const clearSeatHoldTimer = () => {
    if (seatHoldTimerRef.current !== null) {
      window.clearTimeout(seatHoldTimerRef.current);
      seatHoldTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (seatHoldTimerRef.current !== null) {
        window.clearTimeout(seatHoldTimerRef.current);
        seatHoldTimerRef.current = null;
      }
    };
  }, []);

  const value = useMemo<BookingFlowContextType>(() => {
    const applySeatHold = (expiresAt: string) => {
      clearSeatHoldTimer();

      const millisecondsUntilExpiry = Math.max(
        new Date(expiresAt).getTime() - Date.now(),
        0,
      );

      seatHoldTimerRef.current = window.setTimeout(() => {
        setState((previous) => ({ ...previous, isSeatHoldExpired: true }));
      }, millisecondsUntilExpiry);
    };

    const setStep = (step: BookingFlowStep) => {
      setState((previous) => ({ ...previous, step }));
    };

    const setPassengers = (passengers: Passenger[]) => {
      setState((previous) => ({ ...previous, passengers }));
    };

    const setSeatSelections = (seats: string[]) => {
      setState((previous) => ({ ...previous, seatSelections: seats }));
    };

    const setMealSelections = (meals: MealPreference[]) => {
      setState((previous) => ({ ...previous, mealSelections: meals }));
    };

    const setPricing = (pricing: BookingPricingSnapshot) => {
      setState((previous) => ({ ...previous, pricing }));
    };

    const startSeatHold = (minutes = SEAT_HOLD_DEFAULT_MINUTES) => {
      const expiresAt = new Date(
        Date.now() + minutes * 60 * 1000,
      ).toISOString();
      applySeatHold(expiresAt);
      setState((previous) => ({
        ...previous,
        seatHoldExpiresAt: expiresAt,
        isSeatHoldExpired: false,
      }));
    };

    const startFlow = (flightId: string) => {
      const expiresAt = new Date(
        Date.now() + SEAT_HOLD_DEFAULT_MINUTES * 60 * 1000,
      ).toISOString();
      applySeatHold(expiresAt);
      setState({
        ...INITIAL_BOOKING_FLOW_STATE,
        selectedFlightId: flightId,
        seatHoldExpiresAt: expiresAt,
      });
    };

    const clearFlow = () => {
      clearSeatHoldTimer();
      setState(INITIAL_BOOKING_FLOW_STATE);
    };

    return {
      state,
      startFlow,
      setStep,
      setPassengers,
      setSeatSelections,
      setMealSelections,
      setPricing,
      startSeatHold,
      clearFlow,
    };
  }, [state]);

  return (
    <BookingFlowContext.Provider value={value}>
      {children}
    </BookingFlowContext.Provider>
  );
};

export default BookingFlowProvider;
````

## File: src/store/paymentFlowContext.ts
````typescript
import { createContext } from "react";
import type { PaymentMethod, PaymentStatus } from "@/types";

export interface PaymentFlowState {
  paymentId: string | null;
  method: PaymentMethod | null;
  status: PaymentStatus | null;
  otpAttempts: number;
  maxOtpAttempts: number;
  otpExpiresAt: string | null;
  isOtpExpired: boolean;
}

export interface PaymentFlowContextType {
  state: PaymentFlowState;
  startSession: (args: {
    paymentId: string;
    method: PaymentMethod;
    status?: PaymentStatus;
  }) => void;
  setStatus: (status: PaymentStatus) => void;
  requestOtp: (expiresAt: string, maxAttempts?: number) => void;
  incrementOtpAttempt: () => void;
  clearSession: () => void;
}

export const INITIAL_PAYMENT_FLOW_STATE: PaymentFlowState = {
  paymentId: null,
  method: null,
  status: null,
  otpAttempts: 0,
  maxOtpAttempts: 3,
  otpExpiresAt: null,
  isOtpExpired: false,
};

export const PaymentFlowContext = createContext<
  PaymentFlowContextType | undefined
>(undefined);
````

## File: src/store/paymentFlowStore.tsx
````typescript
import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import {
  INITIAL_PAYMENT_FLOW_STATE,
  PaymentFlowContext,
  type PaymentFlowContextType,
  type PaymentFlowState,
} from "./paymentFlowContext";
import type { PaymentMethod, PaymentStatus } from "@/types";

export const PaymentFlowProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<PaymentFlowState>(
    INITIAL_PAYMENT_FLOW_STATE,
  );
  const otpTimerRef = useRef<number | null>(null);

  const clearOtpTimer = () => {
    if (otpTimerRef.current !== null) {
      window.clearTimeout(otpTimerRef.current);
      otpTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (otpTimerRef.current !== null) {
        window.clearTimeout(otpTimerRef.current);
        otpTimerRef.current = null;
      }
    };
  }, []);

  const value = useMemo<PaymentFlowContextType>(() => {
    const startSession = ({
      paymentId,
      method,
      status = "pending",
    }: {
      paymentId: string;
      method: PaymentMethod;
      status?: PaymentStatus;
    }) => {
      clearOtpTimer();
      setState({
        ...INITIAL_PAYMENT_FLOW_STATE,
        paymentId,
        method,
        status,
      });
    };

    const setStatus = (status: PaymentStatus) => {
      setState((previous) => ({ ...previous, status }));
    };

    const requestOtp = (expiresAt: string, maxAttempts = 3) => {
      clearOtpTimer();

      const millisecondsUntilExpiry = Math.max(
        new Date(expiresAt).getTime() - Date.now(),
        0,
      );

      otpTimerRef.current = window.setTimeout(() => {
        setState((previous) => ({ ...previous, isOtpExpired: true }));
      }, millisecondsUntilExpiry);

      setState((previous) => ({
        ...previous,
        status: "otp_required",
        otpExpiresAt: expiresAt,
        maxOtpAttempts: maxAttempts,
        otpAttempts: 0,
        isOtpExpired: false,
      }));
    };

    const incrementOtpAttempt = () => {
      setState((previous) => ({
        ...previous,
        otpAttempts: previous.otpAttempts + 1,
      }));
    };

    const clearSession = () => {
      clearOtpTimer();
      setState(INITIAL_PAYMENT_FLOW_STATE);
    };

    return {
      state,
      startSession,
      setStatus,
      requestOtp,
      incrementOtpAttempt,
      clearSession,
    };
  }, [state]);

  return (
    <PaymentFlowContext.Provider value={value}>
      {children}
    </PaymentFlowContext.Provider>
  );
};

export default PaymentFlowProvider;
````

## File: src/store/useAuthStore.ts
````typescript
import { useContext } from "react";
import { AuthContext, type AuthContextType } from "./authContext";

export function useAuthStore(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthStore must be used within an AuthProvider");
  return ctx;
}

export default useAuthStore;
````

## File: src/store/useBookingFlowStore.ts
````typescript
import { useContext } from "react";
import {
  BookingFlowContext,
  type BookingFlowContextType,
} from "./bookingFlowContext";

export function useBookingFlowStore(): BookingFlowContextType {
  const context = useContext(BookingFlowContext);

  if (!context) {
    throw new Error(
      "useBookingFlowStore must be used within a BookingFlowProvider",
    );
  }

  return context;
}

export default useBookingFlowStore;
````

## File: src/store/usePaymentFlowStore.ts
````typescript
import { useContext } from "react";
import {
  PaymentFlowContext,
  type PaymentFlowContextType,
} from "./paymentFlowContext";

export function usePaymentFlowStore(): PaymentFlowContextType {
  const context = useContext(PaymentFlowContext);

  if (!context) {
    throw new Error(
      "usePaymentFlowStore must be used within a PaymentFlowProvider",
    );
  }

  return context;
}

export default usePaymentFlowStore;
````

## File: src/styles/index.css
````css
@import "./tokens.css";
@import "tailwindcss";

@theme {
  --color-primary-10:  var(--color-primary-10);
  --color-primary-20:  var(--color-primary-20);
  --color-primary-30:  var(--color-primary-30);
  --color-primary-40:  var(--color-primary-40);
  --color-primary-50:  var(--color-primary-50);
  --color-primary-60:  var(--color-primary-60);
  --color-primary-70:  var(--color-primary-70);
  --color-primary-80:  var(--color-primary-80);
  --color-primary-90:  var(--color-primary-90);
  --color-primary-100: var(--color-primary-100);

  --color-secondary-10:  var(--color-secondary-10);
  --color-secondary-20:  var(--color-secondary-20);
  --color-secondary-30:  var(--color-secondary-30);
  --color-secondary-40:  var(--color-secondary-40);
  --color-secondary-50:  var(--color-secondary-50);
  --color-secondary-60:  var(--color-secondary-60);
  --color-secondary-70:  var(--color-secondary-70);
  --color-secondary-80:  var(--color-secondary-80);
  --color-secondary-90:  var(--color-secondary-90);
  --color-secondary-100: var(--color-secondary-100);

  --color-tertiary-10:  var(--color-tertiary-10);
  --color-tertiary-20:  var(--color-tertiary-20);
  --color-tertiary-30:  var(--color-tertiary-30);
  --color-tertiary-40:  var(--color-tertiary-40);
  --color-tertiary-50:  var(--color-tertiary-50);
  --color-tertiary-60:  var(--color-tertiary-60);
  --color-tertiary-70:  var(--color-tertiary-70);
  --color-tertiary-80:  var(--color-tertiary-80);
  --color-tertiary-90:  var(--color-tertiary-90);
  --color-tertiary-100: var(--color-tertiary-100);

  --color-grey-10:  var(--color-grey-10);
  --color-grey-20:  var(--color-grey-20);
  --color-grey-30:  var(--color-grey-30);
  --color-grey-40:  var(--color-grey-40);
  --color-grey-50:  var(--color-grey-50);
  --color-grey-60:  var(--color-grey-60);
  --color-grey-70:  var(--color-grey-70);
  --color-grey-80:  var(--color-grey-80);
  --color-grey-90:  var(--color-grey-90);
  --color-grey-100: var(--color-grey-100);

  --color-success-10:  var(--color-success-10);
  --color-success-20:  var(--color-success-20);
  --color-success-30:  var(--color-success-30);
  --color-success-40:  var(--color-success-40);
  --color-success-50:  var(--color-success-50);
  --color-success-60:  var(--color-success-60);
  --color-success-70:  var(--color-success-70);
  --color-success-80:  var(--color-success-80);
  --color-success-90:  var(--color-success-90);
  --color-success-100: var(--color-success-100);

  --color-info-10:  var(--color-info-10);
  --color-info-20:  var(--color-info-20);
  --color-info-30:  var(--color-info-30);
  --color-info-40:  var(--color-info-40);
  --color-info-50:  var(--color-info-50);
  --color-info-60:  var(--color-info-60);
  --color-info-70:  var(--color-info-70);
  --color-info-80:  var(--color-info-80);
  --color-info-90:  var(--color-info-90);
  --color-info-100: var(--color-info-100);

  --color-danger-10:  var(--color-danger-10);
  --color-danger-20:  var(--color-danger-20);
  --color-danger-30:  var(--color-danger-30);
  --color-danger-40:  var(--color-danger-40);
  --color-danger-50:  var(--color-danger-50);
  --color-danger-60:  var(--color-danger-60);
  --color-danger-70:  var(--color-danger-70);
  --color-danger-80:  var(--color-danger-80);
  --color-danger-90:  var(--color-danger-90);
  --color-danger-100: var(--color-danger-100);

  --color-warning-10:  var(--color-warning-10);
  --color-warning-20:  var(--color-warning-20);
  --color-warning-30:  var(--color-warning-30);
  --color-warning-40:  var(--color-warning-40);
  --color-warning-50:  var(--color-warning-50);
  --color-warning-60:  var(--color-warning-60);
  --color-warning-70:  var(--color-warning-70);
  --color-warning-80:  var(--color-warning-80);
  --color-warning-90:  var(--color-warning-90);
  --color-warning-100: var(--color-warning-100);

  /* Semantic text colors */
    --color-text-primary:        var(--text-primary);
    --color-text-secondary:      var(--text-secondary);
    --color-text-tertiary:       var(--text-tertiary);
    --color-text-disabled:       var(--text-disabled);
    --color-text-link:           var(--text-link);
    --color-text-link-hover:     var(--text-link-hover);
    --color-text-inverse:        var(--text-inverse);
    --color-text-on-primary:     var(--text-on-primary);
    --color-text-success:        var(--text-success);
    --color-text-success-strong: var(--text-success-strong);
    --color-text-warning:        var(--text-warning);
    --color-text-warning-strong: var(--text-warning-strong);
    --color-text-error:          var(--text-error);
    --color-text-error-strong:   var(--text-error-strong);
    --color-text-info:           var(--text-info);
    --color-text-info-strong:    var(--text-info-strong);
    --color-text-danger:         var(--text-danger);
    --color-text-danger-strong:  var(--text-danger-strong);
    --color-text-static-light:   var(--text-static-light);
    --color-text-static-dark:    var(--text-static-dark);

  /* Semantic backgrounds */
    --color-bg-page:          var(--bg-page);
    --color-bg-surface:       var(--bg-surface);
    --color-bg-surface-light: var(--bg-surface-light);
    --color-bg-surface-warm:  var(--bg-surface-warm);
    --color-bg-input:         var(--bg-input);
    --color-bg-input-focus:   var(--bg-input-focus);
    --color-bg-selected:      var(--bg-selected);
    --color-bg-primary:       var(--bg-primary);
    --color-bg-primary-hover: var(--bg-primary-hover);
    --color-bg-primary-press: var(--bg-primary-press);
    --color-bg-success:       var(--bg-success);
    --color-bg-warning:       var(--bg-warning);
    --color-bg-info:          var(--bg-info);
    --color-bg-danger:        var(--bg-danger);

  /* Typography scale */
    --font-sans: var(--font-sans);

    --text-display-1: var(--text-display-1-size);
    --text-display-2: var(--text-display-2-size);
    --text-display-3: var(--text-display-3-size);
    --text-h1: var(--text-h1-size);
    --text-h2: var(--text-h2-size);
    --text-h3: var(--text-h3-size);
    --text-h4: var(--text-h4-size);
    --text-h5: var(--text-h5-size);
    --text-h6: var(--text-h6-size);
    --text-para-lg: var(--text-para-lg-size);
    --text-para-md: var(--text-para-md-size);
    --text-para-sm: var(--text-para-sm-size);
    --text-para-xs: var(--text-para-xs-size);
    --text-label-lg: var(--text-label-lg-size);
    --text-label-md: var(--text-label-md-size);
    --text-label-sm: var(--text-label-sm-size);
    --text-label-xs: var(--text-label-xs-size);
}

@layer base {
  body {
      background-color: var(--bg-page);
      color: var(--text-primary);
      font-family: var(--font-sans);
      font-size: var(--text-para-md-size);
      line-height: var(--text-para-lh);
      -webkit-font-smoothing: antialiased;
  }

  h1 { font-size: var(--text-h1-size); font-weight: var(--text-h1-weight); line-height: var(--text-heading-lh); }
  h2 { font-size: var(--text-h2-size); font-weight: var(--text-h2-weight); line-height: var(--text-heading-lh); }
  h3 { font-size: var(--text-h3-size); font-weight: var(--text-h3-weight); line-height: var(--text-heading-lh); }
  h4 { font-size: var(--text-h4-size); font-weight: var(--text-h4-weight); line-height: var(--text-heading-lh); }
  h5 { font-size: var(--text-h5-size); font-weight: var(--text-h5-weight); line-height: var(--text-heading-lh); }
  h6 { font-size: var(--text-h6-size); font-weight: var(--text-h6-weight); line-height: var(--text-heading-lh); }

  a { color: var(--text-link); }
  a:hover { color: var(--text-link-hover); }

  * { box-sizing: border-box; }
}
````

## File: src/styles/tokens.css
````css
:root {

/* Brand Palette: Primary */
    --color-primary-10: #F1F5F8;
    --color-primary-20: #E0E8F0;
    --color-primary-30: #C5D3E2;
    --color-primary-40: #A0B6CF;
    --color-primary-50: #7E9CBE;
    --color-primary-60: #5E83AE;
    --color-primary-70: #496B92;
    --color-primary-80: #385270;
    --color-primary-90: #26374B;
    --color-primary-100: #16202C;

/* Brand Palette: Secondary */
    --color-secondary-10: #FFFEFE;
    --color-secondary-20: #FEFDFB;
    --color-secondary-30: #FDFBF8;
    --color-secondary-40: #FBF9F4;
    --color-secondary-50: #FAF7F1;
    --color-secondary-60: #F9F5ED;
    --color-secondary-70: #C7C4BE;
    --color-secondary-80: #95938E;
    --color-secondary-90: #64625F;
    --color-secondary-100: #32312F;

/* Brand Palette: Tertiary */
    --color-tertiary-10: #F2F3F4;
    --color-tertiary-20: #E3E6E8;
    --color-tertiary-30: #C8CCD0;
    --color-tertiary-40: #ACB3B9;
    --color-tertiary-50: #9199A1;
    --color-tertiary-60: #75808A;
    --color-tertiary-70: #75808A;
    --color-tertiary-80: #5E666E;
    --color-tertiary-90: #464D53;
    --color-tertiary-100: #2F3337;


/* Functional/Semantic Palette: Success */
    --color-success-10:  #E9F3EE;
    --color-success-20:  #D1E5DB;
    --color-success-30:  #A4CBB8;
    --color-success-40:  #76B294;
    --color-success-50:  #499871;
    --color-success-60:  #1B7E4D;
    --color-success-70:  #16653E;
    --color-success-80:  #104C2E;
    --color-success-90:  #0B321F;
    --color-success-100: #051910;

/* Functional/Semantic Palette: Info */
    --color-error-10:  #FDEDEE;
    --color-info-10:  #EAF2F7;
    --color-info-20:  #D4E4EE;
    --color-info-30:  #A9C9DD;
    --color-info-40:  #7DAECC;
    --color-info-50:  #5293BB;
    --color-info-60:  #2778AA;
    --color-info-70:  #1F6088;
    --color-info-80:  #174866;
    --color-info-90:  #103044;
    --color-info-100: #081822;

 /* Functional/Semantic Palette: Danger */
    --color-danger-10:  #F9ECEB;
    --color-danger-20:  #F3D9D6;
    --color-danger-30:  #E7B3AD;
    --color-danger-40:  #DB8D84;
    --color-danger-50:  #CF675B;
    --color-danger-60:  #C34132;
    --color-danger-70:  #9C3428;
    --color-danger-80:  #75271E;
    --color-danger-90:  #4E1A14;
    --color-danger-100: #270D0A;

/* Functional/Semantic Palette: Warning */
    --color-warning-10:  #F3F1E7;
    --color-warning-20:  #E6E1CD;
    --color-warning-30:  #CEC49B;
    --color-warning-40:  #B5A66A;
    --color-warning-50:  #9D8938;
    --color-warning-60:  #846B06;
    --color-warning-70:  #6A5605;
    --color-warning-80:  #4F4004;
    --color-warning-90:  #352B03;
    --color-warning-100: #1A1501;


/* Neutral Palette */
    --color-grey-10:  #F4F6F7;
    --color-grey-20:  #E8EBEB;
    --color-grey-30:  #DADDDE;
    --color-grey-40:  #C1C4C6;
    --color-grey-50:  #898D8F;
    --color-grey-60:  #6E7375;
    --color-grey-70:  #53575A;
    --color-grey-80:  #2F3133;
    --color-grey-90:  #1F2224;
    --color-grey-100: #131214;
    --color-white:    #FFFFFF;
    --color-black:    #000000;


/* Semantic Text */
    --text-primary:         var(--color-grey-100);
    --text-secondary:       var(--color-grey-70);
    --text-tertiary:        var(--color-grey-60);
    --text-disabled:        var(--color-grey-40);
    --text-link:            var(--color-primary-70);
    --text-link-hover:      var(--color-primary-80);
    --text-inverse:         var(--color-tertiary-10);
    --text-on-primary:      var(--color-white);
    --text-success:         var(--color-success-60);
    --text-success-strong:  var(--color-success-80);
    --text-warning:         var(--color-warning-60);
    --text-warning-strong:  var(--color-warning-80);
    --text-error:           var(--color-danger-60);
    --text-error-strong:    var(--color-danger-80);
    --text-info:            var(--color-info-60);
    --text-info-strong:     var(--color-info-80);
    --text-danger:          var(--color-danger-60);
    --text-danger-strong:   var(--color-danger-80);
    --text-static-light:    var(--color-white);
    --text-static-dark:     var(--color-grey-100);

/* Semantic Background */
    --bg-page:              var(--color-white);
    --bg-surface:           var(--color-grey-10);
    --bg-surface-light:     var(--color-grey-20);
    --bg-surface-warm:      var(--color-secondary-50);
    --bg-input:             var(--color-grey-10);
    --bg-input-focus:       var(--color-white);
    --bg-selected:          var(--color-primary-20);
    --bg-primary:           var(--color-primary-60);
    --bg-primary-hover:     var(--color-primary-70);
    --bg-primary-press:     var(--color-primary-80);
    --bg-success:           var(--color-success-10);
    --bg-warning:           var(--color-warning-10);
    --bg-info:              var(--color-info-10);
    --bg-danger:            var(--color-danger-10);
    --bg-overlay:           hsla(0, 0%, 0%, 0.7);


/* Typography */
    /* Font family */
        --font-sans: 'Inter', system-ui, sans-serif;

    /* Display */
    --text-display-1-size:   64px;
    --text-display-1-weight: 700;
    --text-display-2-size:   48px;
    --text-display-2-weight: 700;
    --text-display-3-size:   40px;
    --text-display-3-weight: 700;
    --text-display-lh:       1.2;

    /* Heading */
    --text-h1-size:   32px;
    --text-h1-weight: 700;
    --text-h2-size:   24px;
    --text-h2-weight: 700;
    --text-h3-size:   18px;
    --text-h3-weight: 700;
    --text-h4-size:   16px;
    --text-h4-weight: 700;
    --text-h5-size:   14px;
    --text-h5-weight: 700;
    --text-h6-size:   12px;
    --text-h6-weight: 700;
    --text-heading-lh: 1.2;

    /* Paragraph */
    --text-para-lg-size:   18px;
    --text-para-md-size:   16px;
    --text-para-sm-size:   14px;
    --text-para-xs-size:   12px;
    --text-para-weight:    400;
    --text-para-lh:        1.5;

    /* Label */
    --text-label-lg-size:   18px;
    --text-label-md-size:   16px;
    --text-label-sm-size:   14px;
    --text-label-xs-size:   12px;
    --text-label-weight:    700;
    --text-label-lh:        1;
}
````

## File: src/types/api.types.ts
````typescript
export interface TokenResponse {
  access_token: string;
  token_type: string;
}

export interface MessageResponse {
  message: string;
}
````

## File: src/types/booking.types.ts
````typescript
import type { FlightSegment } from "./flight.types";
import type { Payment, PaymentStatus } from "./payment.types";

export type BookingStatus =
  | "created"
  | "pending"
  | "payment_pending"
  | "confirmed"
  | "issued"
  | "pending_reschedule"
  | "rescheduled"
  | "pending_cancellation"
  | "cancelled"
  | "refunded"
  | "expired";

export type MealPreference =
  | "standard"
  | "vegetarian"
  | "vegan"
  | "halal"
  | "kosher"
  | "child";

export interface Passenger {
  id?: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  passport?: string;
  nationality?: string;
  seatNumber?: string;
  mealPreference?: MealPreference;
}

export interface AddOn {
  code: string;
  label: string;
  amount: number;
  quantity?: number;
}

export interface Booking {
  id: string;
  userId: string;
  flightId: string;
  pnr?: string;
  passengers: Passenger[];
  status: BookingStatus;
  paymentStatus?: PaymentStatus;
  totalPrice: number;
  createdAt: string;
  updatedAt?: string;
  // Nested flight object for UI display
  flight?: {
    flightNumber: string;
    origin: string;
    destination: string;
    departureTime: string;
    arrivalTime: string;
    airline?: string;
  };
}

export interface BookingModification {
  id: string;
  type: "reschedule" | "passenger_update" | "cancellation" | "addon_change";
  reason?: string;
  status: "pending" | "completed" | "rejected";
  createdAt: string;
}

export interface RefundDetail {
  amount: number;
  status: "queued" | "processing" | "completed" | "failed";
  estimatedDays?: string;
}

export interface BookingDetail extends Booking {
  itinerary: FlightSegment[];
  contactEmail?: string;
  contactPhone?: string;
  baseFare?: number;
  taxes?: number;
  fees?: number;
  addOns?: AddOn[];
  payment?: Payment | null;
  modificationHistory?: BookingModification[];
  refund?: RefundDetail;
}

export interface CancellationRequest {
  reason: string;
  refundMethod?: "original" | "bank_transfer" | "wallet";
}

export interface RescheduleRequest {
  newFlightId: string;
  reason: string;
}
````

## File: src/types/destinations.types.ts
````typescript
export interface Airport {
  id: number;
  iata_code: string;
  name: string;
  city: string;
  country: string;
  timezone: string;
}

export interface Aircraft {
  id: number;
  model: string;
  total_seats: number;
  registration: string;
  seats?: Seat[];
}

export interface SeatClass {
  id: number;
  name: string;
}

export interface Seat {
  id: number;
  aircraft_id: number;
  seat_number: string;
  seat_class_id: number;
  seat_class?: SeatClass;
}

export interface SeatConfiguration {
  seat_class_id: number;
  quantity: number;
}

export interface CreateSeatPayload {
  seat_number: string;
  seat_class_id: number;
}

export interface CreateAirportPayload {
  iata_code: string;
  name: string;
  city: string;
  country: string;
  timezone: string;
}

export interface UpdateAirportPayload {
  name?: string;
  city?: string;
  country?: string;
  timezone?: string;
}

export interface CreateAircraftPayload {
  model: string;
  registration: string;
  seat_configurations: SeatConfiguration[];
}

export interface UpdateAircraftPayload {
  model?: string;
  registration?: string;
}

export interface CreateSeatClassPayload {
  name: string;
}

export interface UpdateSeatClassPayload {
  name?: string;
}
````

## File: src/types/flight.types.ts
````typescript
export type CabinClass = "economy" | "premium_economy" | "business" | "first";

export type FlightStatus =
  | "scheduled"
  | "boarding"
  | "on_time"
  | "delayed"
  | "cancelled"
  | "landed";

export interface FlightSegment {
  id: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  status?: FlightStatus;
  airline?: string;
  cabinClass?: CabinClass;
}

export interface Flight {
  id: string;
  flightNumber: string;
  origin: string;
  destination: string;
  originCity?: string | null;       
  originCountry?: string | null;    
  destinationCity?: string | null;  
  destinationCountry?: string | null; 
  departureTime: string;
  arrivalTime: string;
  price: number;
  airline?: string;
  seatsAvailable?: number;
  totalSeats?: number;
  status?: FlightStatus;
  cabinClass?: CabinClass;
  baggageAllowanceKg?: number;
  stops?: number;
  imageUrl?: string;
}

export interface FlightSearchParams {
  origin?: string;
  destination?: string;
  date?: string;
  passengers?: number;
  cabinClass?: CabinClass;
  page?: number;
  pageSize?: number;
  minPrice?: number;
  maxPrice?: number;
  airline?: string;
  stops?: number;
  departureWindowStart?: string;
  departureWindowEnd?: string;
}
````

## File: src/types/index.ts
````typescript
export interface APIError {
  message: string;
  status?: number;
  details?: unknown;
}

export * from "./user.types";
export * from "./flight.types";
export * from "./booking.types";
export * from "./payment.types";
export * from "./pnr.types";
export * from "./report.types";
export * from "./promotion.types";
````

## File: src/types/payment.types.ts
````typescript
export type PaymentMethod = "card" | "gcash" | "paypal" | "bank_transfer";

export type PaymentStatus =
  | "pending"
  | "otp_required"
  | "otp_verified"
  | "authorized"
  | "captured"
  | "failed"
  | "declined"
  | "refund_pending"
  | "refunded";

export type PaymentGateway = "default" | "stripe" | "paypal" | "gcash_gateway";

export interface PaymentCardInput {
  cardholderName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

export interface PaymentRequest {
  bookingId: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  gateway?: PaymentGateway;
  card?: PaymentCardInput;
}

export interface OTPChallenge {
  paymentId: string;
  channel: "sms" | "email";
  maskedTarget: string;
  expiresAt: string;
  attemptsRemaining: number;
}

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  gateway?: PaymentGateway;
  status: PaymentStatus;
  transactionId?: string;
  otpChallenge?: OTPChallenge;
  createdAt: string;
  updatedAt?: string;
}

export interface PaymentFailure {
  code?: string;
  reason: string;
  isRetriable: boolean;
}
````

## File: src/types/pnr.types.ts
````typescript
import type { BookingStatus, Passenger } from "./booking.types";
import type { FlightSegment } from "./flight.types";

export type PNRJourneyStatus =
  | "on_time"
  | "delayed"
  | "cancelled"
  | "boarding"
  | "landed";

export interface PNRStatusResult {
  pnr: string;
  bookingId?: string;
  bookingStatus: BookingStatus;
  journeyStatus: PNRJourneyStatus;
  itinerary: FlightSegment[];
  passengers: Passenger[];
  message?: string;
  updatedAt: string;
}
````

## File: src/types/promotion.types.ts
````typescript
export type PromotionCategory = "flash" | "weekend" | "international" | "promo";

export interface Promotion {
  id: string;
  title: string;
  sale_price: number;
  original_price: number;
  category: PromotionCategory;
  valid_until: string;
  image_url?: string;
  destination_code: string;
  destination_city: string;
  created_at?: string;
}

export interface CreatePromotionPayload {
  title: string;
  sale_price: number;
  original_price: number;
  category: PromotionCategory;
  valid_until: string;
  image_url?: string;
  destination_code: string;
  destination_city: string;
}
````

## File: src/types/report.types.ts
````typescript
export type ReportType =
  | "booking_summary"
  | "revenue_overview"
  | "cancellations"
  | "user_activity";

export type ReportDatePreset = "today" | "this_week" | "this_month" | "custom";

export interface ReportFilters {
  datePreset?: ReportDatePreset;
  startDate?: string;
  endDate?: string;
  route?: string;
  flightId?: string;
  status?: string;
  paymentStatus?: string;
}

export interface ReportQuery {
  type: ReportType;
  filters: ReportFilters;
}

export interface ReportMetric {
  label: string;
  value: number;
}

export interface ReportRow {
  [key: string]: string | number | boolean | null;
}

export interface ReportResult {
  generatedAt: string;
  type: ReportType;
  metrics: ReportMetric[];
  rows: ReportRow[];
}

export interface ExportRequest {
  query: ReportQuery;
  format: "pdf" | "csv";
}
````

## File: src/types/user.types.ts
````typescript
// Matches backend role_id: 1 = admin, 2 = passenger
// "guest" is frontend-only — unauthenticated user, no DB record
export type UserRole = "guest" | "passenger" | "admin";

// Matches backend UserRead exactly
export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role_id: number;
  is_active: boolean;
  phone_number: string | null;
  created_at: string;
}

export interface AuthResponse {
  token: string;
  user: User | null;
}
````

## File: src/utils/cn.ts
````typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
````

## File: src/utils/formatDate.ts
````typescript

````

## File: src/utils/token.ts
````typescript
export function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
}
````

## File: src/validation/auth.schemas.ts
````typescript
import { z } from "zod";
import { phoneSchema, requiredString } from "./common.schemas";

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(72, "Password must be at most 72 characters")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character");

export const loginSchema = z.object({
  email: z.string().trim().email("Invalid email address"),
  password: requiredString("Password"),
});

export const registerSchema = z
  .object({
    first_name: requiredString("First name"),
    last_name: requiredString("Last name"),
    email: z.string().trim().email("Invalid email address"),
    phone_number: phoneSchema.optional(),
    password: passwordSchema,
    confirmPassword: requiredString("Confirm password"),
  })
  .refine((payload) => payload.password === payload.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().trim().email("Invalid email address"),
});

export const resetPasswordSchema = z
  .object({
    token: requiredString("Reset token"),
    new_password: passwordSchema,
    confirmPassword: requiredString("Confirm password"),
  })
  .refine((payload) => payload.new_password === payload.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
````

## File: src/validation/booking.schemas.ts
````typescript
import { z } from "zod";
import {
  futureOrTodayDateSchema,
  phoneSchema,
  requiredString,
} from "./common.schemas";

export const passengerSchema = z.object({
  firstName: requiredString("First name"),
  lastName: requiredString("Last name"),
  dateOfBirth: requiredString("Date of birth"),
  passport: requiredString("Passport / ID"),
  seatNumber: z.string().trim().optional(),
  mealPreference: z
    .enum(["standard", "vegetarian", "vegan", "halal", "kosher", "child"])
    .optional(),
});

export const passengerDetailsFormSchema = z.object({
  contactEmail: z.string().trim().email("Invalid email address"),
  contactPhone: phoneSchema,
  passengers: z
    .array(passengerSchema)
    .min(1, "At least one passenger is required"),
});

export const seatSelectionSchema = z.object({
  selectedSeats: z.array(requiredString("Seat")).optional(),
});

export const mealPreferenceSchema = z.object({
  meals: z
    .array(
      z.enum(["standard", "vegetarian", "vegan", "halal", "kosher", "child"]),
    )
    .optional(),
});

export const cancellationSchema = z.object({
  reason: requiredString("Cancellation reason"),
  refundMethod: z.enum(["original", "bank_transfer", "wallet"]).optional(),
});

export const reschedulePickSchema = z.object({
  newDate: futureOrTodayDateSchema,
  newFlightId: requiredString("New flight"),
  reason: requiredString("Reschedule reason"),
});

export const reportDateRangeSchema = z
  .object({
    startDate: futureOrTodayDateSchema,
    endDate: futureOrTodayDateSchema,
  })
  .refine(
    ({ startDate, endDate }) =>
      new Date(endDate).getTime() >= new Date(startDate).getTime(),
    {
      message: "End date must be the same as or later than start date",
      path: ["endDate"],
    },
  );

export type PassengerDetailsFormValues = z.infer<
  typeof passengerDetailsFormSchema
>;
export type CancellationFormValues = z.infer<typeof cancellationSchema>;
export type ReschedulePickFormValues = z.infer<typeof reschedulePickSchema>;
````

## File: src/validation/common.schemas.ts
````typescript
import { z } from "zod";

export const requiredString = (label: string) =>
  z.string().trim().min(1, `${label} is required`);

export const phoneSchema = z
  .string()
  .trim()
  .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number format");

export const dateStringSchema = z
  .string()
  .trim()
  .refine((value) => !Number.isNaN(Date.parse(value)), "Invalid date format");

function startOfDay(date: Date): Date {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export const futureOrTodayDateSchema = dateStringSchema.refine((value) => {
  const targetDate = startOfDay(new Date(value));
  const today = startOfDay(new Date());
  return targetDate >= today;
}, "Date must be today or later");
````

## File: src/validation/flight.schemas.ts
````typescript
import { z } from "zod";
import {
  dateStringSchema,
  futureOrTodayDateSchema,
  requiredString,
} from "./common.schemas";

export const flightSearchSchema = z
  .object({
    origin: requiredString("Origin"),
    destination: requiredString("Destination"),
    date: futureOrTodayDateSchema,
    passengers: z.coerce
      .number()
      .int("Passengers must be a whole number")
      .min(1, "At least 1 passenger is required")
      .max(9, "Maximum 9 passengers allowed"),
    cabinClass: z
      .enum(["economy", "premium_economy", "business", "first"])
      .optional(),
  })
  .refine(
    (payload) =>
      payload.origin.trim().toLowerCase() !==
      payload.destination.trim().toLowerCase(),
    {
      message: "Origin and destination must be different",
      path: ["destination"],
    },
  );

export type FlightSearchFormValues = z.infer<typeof flightSearchSchema>;

export const flightSchema = z.object({
  flightNumber: requiredString("Flight Number"),
  origin: requiredString("Origin"),
  destination: requiredString("Destination"),
  departureTime: dateStringSchema,
  arrivalTime: dateStringSchema,
  airline: requiredString("Airline"),
  aircraftId: z.coerce.number().min(1, "Aircraft is required"),
  seat_pricing: z.array(z.object({
    seat_class_id: z.number(),
    price: z.coerce.number().min(0, "Price must be positive"),
  })).min(1, "At least one price configuration is required"),
  status: z
    .enum(["scheduled", "boarding", "on_time", "delayed", "cancelled", "landed"])
    .default("scheduled"),
  baggageAllowanceKg: z.coerce.number().min(0).optional(),
  stops: z.coerce.number().int().min(0).default(0),
  imageUrl: z.string().url("Must be a valid URL").or(z.literal("")).optional(),
});

export type FlightFormValues = z.infer<typeof flightSchema>;
````

## File: src/validation/index.ts
````typescript
export * from "./auth.schemas";
export * from "./booking.schemas";
export * from "./common.schemas";
export * from "./flight.schemas";
export * from "./payment.schemas";
export * from "./pnr.schemas";
````

## File: src/validation/payment.schemas.ts
````typescript
import { z } from "zod";
import { requiredString } from "./common.schemas";

const cardNumberSchema = z
  .string()
  .trim()
  .refine((value) => /^\d{13,19}$/.test(value.replace(/\s+/g, "")), {
    message: "Card number must be 13 to 19 digits",
  });

const expirySchema = z
  .string()
  .trim()
  .regex(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, "Expiry must be in MM/YY format")
  .refine((value) => {
    const [monthValue, yearValue] = value.split("/");
    const month = Number(monthValue);
    const year = 2000 + Number(yearValue);
    const lastDayOfMonth = new Date(year, month, 0, 23, 59, 59, 999);
    return lastDayOfMonth.getTime() >= Date.now();
  }, "Card is expired");

const cvvSchema = z
  .string()
  .trim()
  .regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits");

export const paymentFormSchema = z
  .object({
    method: z.enum(["card", "gcash", "paypal", "bank_transfer"]),
    cardholderName: z.string().trim().optional(),
    cardNumber: z.string().trim().optional(),
    expiry: z.string().trim().optional(),
    cvv: z.string().trim().optional(),
  })
  .superRefine((payload, ctx) => {
    if (payload.method !== "card") {
      return;
    }

    const cardholderValidation = requiredString("Cardholder name").safeParse(
      payload.cardholderName,
    );
    if (!cardholderValidation.success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["cardholderName"],
        message:
          cardholderValidation.error.issues[0]?.message ??
          "Cardholder name is required",
      });
    }

    const cardNumberValidation = cardNumberSchema.safeParse(payload.cardNumber);
    if (!cardNumberValidation.success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["cardNumber"],
        message:
          cardNumberValidation.error.issues[0]?.message ??
          "Invalid card number",
      });
    }

    const expiryValidation = expirySchema.safeParse(payload.expiry);
    if (!expiryValidation.success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["expiry"],
        message: expiryValidation.error.issues[0]?.message ?? "Invalid expiry",
      });
    }

    const cvvValidation = cvvSchema.safeParse(payload.cvv);
    if (!cvvValidation.success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["cvv"],
        message: cvvValidation.error.issues[0]?.message ?? "Invalid CVV",
      });
    }
  });

export const otpSchema = z.object({
  otpCode: z
    .string()
    .trim()
    .regex(/^\d{6}$/, "OTP must be 6 digits"),
});

export type PaymentFormValues = z.infer<typeof paymentFormSchema>;
export type OTPFormValues = z.infer<typeof otpSchema>;
````

## File: src/validation/pnr.schemas.ts
````typescript
import { z } from "zod";

export const pnrSchema = z.object({
  pnr: z
    .string()
    .trim()
    .transform((value) => value.toUpperCase())
    .refine((value) => /^[A-Z0-9]{6}$/.test(value), {
      message: "PNR must be exactly 6 alphanumeric characters",
    }),
});

export type PNRFormValues = z.infer<typeof pnrSchema>;
````

## File: src/validation/promotion.schemas.ts
````typescript
import { z } from "zod";
import { requiredString } from "./common.schemas";

export const promotionSchema = z.object({
  title: requiredString("Title"),
  sale_price: z.number().min(0, "Sale price must be positive"),
  original_price: z.number().min(0, "Original price must be positive"),
  category: z.enum(["flash", "weekend", "international", "promo"]),
  valid_until: z.string().min(1, "Expiration date is required"),
  image_url: z.string().url("Must be a valid URL").or(z.literal("")).optional(),
  destination_code: z
    .string()
    .length(3, "Destination code must be exactly 3 characters")
    .toUpperCase(),
  destination_city: requiredString("Destination City"),
});

export type PromotionFormValues = z.infer<typeof promotionSchema>;
````

## File: src/App.tsx
````typescript
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import Navbar from "@/pages/_shared/components/layout/Navbar";
import Footer from "@/pages/_shared/components/layout/Footer";
import ProtectedRoute from "@/pages/_shared/components/layout/ProtectedRoute";
import PublicOnlyRoute from "@/pages/_shared/components/layout/PublicOnlyRoute";
import AdminRoute from "@/pages/_shared/components/layout/AdminRoute";
import ScreenPlaceholder from "@/pages/_shared/components/ui/ScreenPlaceholder";
import HomePage from "@/pages/HomePage/HomePage";
import BookingLandingPage from "@/pages/MainPagesFolder/BookingLandingPage/BookingLandingPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import SearchResultsPage from "@/pages/BookingResultPagesFolder/SearchResultsPage/SearchResultsPage";
import BookingDetailPage from "@/pages/BookingDetailPage";
import MyBookingsPage from "@/pages/MyBookingsPage";
import PassengerDetailsPage from "@/pages/BookingPagesFolder/PassengerDetailsPage/PassengerDetailsPage";
import SeatSelectionPage from "@/pages/BookingPagesFolder/SeatSelectionPage/SeatSelectionPage";
import BookingSummaryPage from "@/pages/BookingPagesFolder/BookingSummaryPage/BookingSummaryPage";
import PaymentPage from "@/pages/BookingPagesFolder/PaymentPage/PaymentPage";
import PaymentProcessingPage from "@/pages/BookingPagesFolder/PaymentProcessingPage/PaymentProcessingPage";
import BookingConfirmationPage from "@/pages/BookingPagesFolder/BookingConfirmationPage/BookingConfirmationPage";
import ResultsBookingPage from "@/pages/BookingResultPagesFolder/ResultsBookingPage/ResultsBookingPage";
import FlightStatusPage from "@/pages/MainPagesFolder/FlightStatusPage/FlightStatusPage";
import ManageBookingsPage from "@/pages/ManageBookingPagesFolder/ManageBookingsPage/ManageBookingsPage";
import ManageBookingDetailsPage from "@/pages/ManageBookingPagesFolder/ManageBookingDetailsPage/ManageBookingDetailsPage";
import ManageBookingCancelPage from "@/pages/ManageBookingPagesFolder/ManageBookingCancelPage/ManageBookingCancelPage";
import ManageBookingCanceledPage from "@/pages/ManageBookingPagesFolder/ManageBookingCanceledPage/ManageBookingCanceledPage";
import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import AdminFlightsPage from "@/pages/admin/AdminFlightsPage";
import AdminAddFlightPage from "@/pages/admin/AdminAddFlightPage";
import AdminEditFlightPage from "@/pages/admin/AdminEditFlightPage";
import AdminUsersPage from "@/pages/admin/AdminUsersPage";
import AdminUserDetailPage from "@/pages/admin/AdminUserDetailPage";
import AdminReportsPage from "@/pages/admin/AdminReportsPage";
import AdminPromotionsPage from "@/pages/admin/AdminPromotionsPage";
import ExplorePage from "@/pages/MainPagesFolder/ExplorePage/ExplorePage";
import DestinationPage from "@/pages/ExplorePagesFolder/DestinationPage/DestinationPage";
import PromosPage from "@/pages/ExplorePagesFolder/PromosPage/PromosPage";
import DeaPage from "@/pages/ExplorePagesFolder/DeaPage/DeaPage";
import AdminDestinationsPage from "@/pages/admin/AdminDestinationsPage";

function screen(
  id: string,
  title: string,
  scope: "public" | "user" | "admin",
  description: string,
) {
  return (
    <ScreenPlaceholder
      id={id}
      title={title}
      scope={scope}
      description={description}
    />
  );
}

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main>
        <Routes>
          {/* Public Routes */}
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.BOOK} element={<BookingLandingPage />} />
          <Route path={ROUTES.SEARCH_RESULTS} element={<SearchResultsPage />} />
          <Route path={ROUTES.EXPLORE} element={<ExplorePage />} />
          <Route path={ROUTES.FLIGHTS} element={<FlightStatusPage />} />
          <Route
            path={ROUTES.EXPLORE_DESTINATION}
            element={<DestinationPage />}
          />
          <Route path={ROUTES.EXPLORE_PROMOS} element={<PromosPage />} />
          <Route path={ROUTES.EXPLORE_PROMO_DETAIL} element={<DeaPage />} />
          <Route path={ROUTES.FLIGHT_DETAIL} element={<ResultsBookingPage />} />
          <Route
            path={ROUTES.BOOKING_PASSENGER_DETAILS}
            element={<PassengerDetailsPage />}
          />
          <Route
            path={ROUTES.BOOKING_SEAT_SELECTION}
            element={<SeatSelectionPage />}
          />
          <Route
            path={ROUTES.BOOKING_SUMMARY}
            element={<BookingSummaryPage />}
          />
          <Route path={ROUTES.PAYMENT} element={<PaymentPage />} />
          <Route
            path={ROUTES.PAYMENT_OTP}
            element={<PaymentProcessingPage />}
          />
          <Route
            path={ROUTES.BOOKING_CONFIRMATION}
            element={<BookingConfirmationPage />}
          />
          <Route path={ROUTES.PNR_STATUS} element={<FlightStatusPage />} />
          <Route path={ROUTES.MANAGE} element={<ManageBookingsPage />} />
          <Route
            path={ROUTES.MANAGE_BOOKING_DETAIL}
            element={<ManageBookingDetailsPage />}
          />
          <Route
            path={ROUTES.MANAGE_BOOKING_CANCEL}
            element={<ManageBookingCancelPage />}
          />
          <Route
            path={ROUTES.MANAGE_BOOKING_CANCELED}
            element={<ManageBookingCanceledPage />}
          />
          <Route
            path={ROUTES.VERIFY_EMAIL_PENDING}
            element={screen(
              "S-09",
              "Verify Email Pending",
              "public",
              "Email verification pending state with resend action.",
            )}
          />
          <Route
            path={ROUTES.AUTH_GATE}
            element={screen(
              "S-10",
              "Login Prompt / Auth Gate",
              "public",
              "Prompt shown when user must authenticate to continue.",
            )}
          />

          {/* Public-only Routes (guest only) */}
          <Route element={<PublicOnlyRoute />}>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route
              path={ROUTES.FORGOT_PASSWORD}
              element={screen(
                "S-06",
                "Forgot Password",
                "public",
                "Password recovery request and resend flow.",
              )}
            />
            <Route
              path={ROUTES.RESET_PASSWORD}
              element={screen(
                "S-07",
                "Reset Password",
                "public",
                "Set new password with strength and confirmation rules.",
              )}
            />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route
              path={ROUTES.ADMIN_LOGIN}
              element={screen(
                "A-01",
                "Admin Login",
                "public",
                "Dedicated admin authentication entry with role verification.",
              )}
            />
          </Route>

          {/* User Routes (Login required) */}
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.USER_DASHBOARD} element={<HomePage />} />
            <Route path={ROUTES.MY_BOOKINGS} element={<MyBookingsPage />} />
            <Route
              path={ROUTES.BOOKING_DETAIL}
              element={<BookingDetailPage />}
            />
            <Route
              path={ROUTES.BOOKING_CANCEL}
              element={screen(
                "S-14",
                "Cancel Booking Modal",
                "user",
                "Cancellation confirmation with refund preview and policy.",
              )}
            />
            <Route
              path={ROUTES.RESCHEDULE_PICK}
              element={screen(
                "S-15",
                "Reschedule - Pick Date / Flight",
                "user",
                "Select new date and eligible replacement flight.",
              )}
            />
            <Route
              path={ROUTES.RESCHEDULE_SUMMARY}
              element={screen(
                "S-16",
                "Reschedule Summary",
                "user",
                "Compare old vs new itinerary and confirm changes.",
              )}
            />
            <Route
              path={ROUTES.PROFILE_SETTINGS}
              element={screen(
                "S-17",
                "Profile / Settings",
                "user",
                "User profile management and notification preferences.",
              )}
            />
            <Route
              path={ROUTES.BOOKING_MEAL_PREFERENCE}
              element={screen(
                "S-20",
                "Meal Preference",
                "user",
                "Meal selection per passenger with standard defaults.",
              )}
            />
            <Route
              path={ROUTES.PAYMENT_FAILURE}
              element={screen(
                "S-25",
                "Payment Failure",
                "user",
                "Payment failure recovery with retry and support actions.",
              )}
            />
          </Route>

          {/* Admin Routes (Admin role required) */}
          <Route element={<AdminRoute />}>
            <Route
              path={ROUTES.ADMIN_DASHBOARD}
              element={<AdminDashboardPage />}
            />
            <Route path={ROUTES.ADMIN_FLIGHTS} element={<AdminFlightsPage />} />
            <Route
              path={ROUTES.ADMIN_ADD_FLIGHT}
              element={<AdminAddFlightPage />}
            />
            <Route
              path={ROUTES.ADMIN_EDIT_FLIGHT}
              element={<AdminEditFlightPage />}
            />
            <Route
              path={ROUTES.ADMIN_DELETE_FLIGHT}
              element={screen(
                "A-06",
                "Delete Flight Modal",
                "admin",
                "Deactivate or delete flight with active-booking impact details.",
              )}
            />
            <Route path={ROUTES.ADMIN_USERS} element={<AdminUsersPage />} />
            <Route
              path={ROUTES.ADMIN_USER_PROFILE}
              element={<AdminUserDetailPage />}
            />
            <Route
              path={ROUTES.ADMIN_USER_STATUS}
              element={screen(
                "A-09",
                "Suspend / Reactivate Modal",
                "admin",
                "Account status change with required admin reason.",
              )}
            />
            <Route
              path={ROUTES.ADMIN_BOOKINGS}
              element={screen(
                "A-10",
                "Admin Booking List",
                "admin",
                "Booking management table with filters and export actions.",
              )}
            />
            <Route
              path={ROUTES.ADMIN_BOOKING_DETAIL}
              element={screen(
                "A-11",
                "Admin Booking Detail",
                "admin",
                "Booking deep view including payment and passenger timeline.",
              )}
            />
            <Route
              path={ROUTES.ADMIN_BOOKING_CANCEL}
              element={screen(
                "A-12",
                "Admin Cancel Modal",
                "admin",
                "Cancellation workflow with required reason and refund preview.",
              )}
            />
            <Route path={ROUTES.ADMIN_REPORTS} element={<AdminReportsPage />} />
            <Route path={ROUTES.ADMIN_PROMOTIONS} element={<AdminPromotionsPage />} />
            <Route path={ROUTES.ADMIN_DESTINATIONS} element={<AdminDestinationsPage />} />
            <Route
              path={ROUTES.ADMIN_REPORT_RESULT}
              element={screen(
                "A-14",
                "Report Result",
                "admin",
                "Generated report output with chart and export summary.",
              )}
            />
          </Route>

          {/* Fallback */}
          <Route
            path={ROUTES.UNAUTHORIZED}
            element={screen(
              "SYS-401",
              "Unauthorized",
              "public",
              "Access denied for the requested area.",
            )}
          />
          <Route
            path="*"
            element={screen(
              "SYS-404",
              "Not Found",
              "public",
              "The requested page does not exist yet or has moved.",
            )}
          />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
````

## File: src/main.tsx
````typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { AuthProvider } from "./store/authStore";
import { BookingFlowProvider } from "./store/bookingFlowStore";
import { PaymentFlowProvider } from "./store/paymentFlowStore";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BookingFlowProvider>
        <PaymentFlowProvider>
          <App />
        </PaymentFlowProvider>
      </BookingFlowProvider>
    </AuthProvider>
  </StrictMode>,
);
````

## File: src/vite-env.d.ts
````typescript
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
````

## File: .env.example
````
# Change this to your real backend URL in production
VITE_API_URL=http://localhost:xxxx

# Change this to your real frontend URL in production
VITE_APP_URL=http://localhost:xxxx
````

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.production
sitemap.md
````

## File: eslint.config.js
````javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
````

## File: index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SkyLink | Airline Reservation System</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Russo+One&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: InitialWireframes.txt
````
Table

Public Screens

· S-01 Homepage
. S-02 Search Results
. S-03 Flight Detail
· S-04 PNR Status Check
. S-05 Login Page
. S-06 Forgot Password
· S-07 Reset Password
· S-08 Register Page
. S-09 Verify Email Pending
. S-10 Login Prompt / Auth Gate

User Screens (Login required)

· S-11 User Dashboard
. S-12 My Bookings List
. S-13 Booking Detail
. S-14 Cancel Booking Modal
. S-15 Reschedule - Pick Date / Flight
. S-16 Reschedule Summary
. S-17 Profile / Settings
. S-18 Passenger Details Form
. S-19 Seat Selection
· S-20 Meal Preference
. S-21 Booking Summary
. S-22 Payment Page
· S-23 3DS / OTP Screen
· S-24 Booking Confirmation
· S-25 Payment Failure Page

Admin Screens (Admin role required)

. A-01 Admin Login Page
. A-02 Admin Dashboard
. A-03 Flight List
A-04 Add Flight Form
. A-05 Edit Flight Form
. A-06 Delete Flight Modal
. A-07 User List
. A-08 User Profile (Admin View)
· A-09 Suspend / Reactivate Modal
. A-10 Booking List
· A-11 Booking Detail (Admin)
. A-12 Admin Cancel Modal
· A-13 Reports Module
. A-14 Report Result


Onboarding Flow:

· Welcome:
. Welcome / Introduction screen
. User type selection (Admin, Business
Owner, Guest)
· Sign Up:
. Input personal details
· Set up username / password
· Verification (email or phone)
. ! Duplicate email > show inline error
· ! Weak password > show strength guide
· Login:
. Username / password input
. Forgot password / reset password
. ! 3 failed attempts > show CAPTCHA
. ! Unverified account > resend link prompt
· Onboarding tutorial (optional):
· Feature introduction (swipe through)
· Permissions (e.g. notifications, location)

User Profiles Flow:

. Profile setup:
. Upload profile picture
. Input personal details
· Set preferences
. Profile view:
. View personal details
. View bookings associated
· Profile edit:
· Edit personal details
. Change password
. ! Wrong current password > block save
. ! Invalid phone format > inline error
. Settings / preferences:
. Notification settings
. Privacy settings

Flight Search Flow

· Search:
. Input search query (origin, destination, date,
passengers, cabin class)
· View search results (with filters)
. ! Same origin & destination > field error
. ! Past date selected > blocked by picker
. ! No flights found > empty state with alt dates
· Flight detail:
· View flight info (times, stops, price, baggage)
. View fare rules
. Click Book Now
. Filter & sort:
. Price range
. Number of stops
Departure time
· Airline preference
. Cabin class

Booking Flow

· Passenger details:
. Input name, DOB, ID / Passport
. Input contact email and phone
. ! Required field empty > highlight on
submit
· ! Session timeout > seat released, re-
search prompt
. Seat selection:
. Choose seat from seat map
· Skip (any available)
· ! Seat taken mid-session > prompt to re-
select
. Meal preference:
. Choose meal type per passenger
. Skip > defaults to Standard
. Booking summary:
. Review all details and itemized price
. Edit any section before paying

Cancellation Flow

. My bookings:
View all bookings with status badges
. Click on a Confirmed booking
Cancel booking:
. Click Cancel Booking button
. View refund amount and policy in modal
. Confirm cancellation
. ! Past flight > Cancel button disabled
. ! Non-refundable > modal shows ₱O
refund clearly before confirming
. After cancellation:
. Status updated to Cancelled
. Seat released to inventory
. Refund queued (3-7 business days)
. Confirmation email sent

Reschedule Flow

· Start reschedule:
. Click Reschedule on booking detail
. Select new travel date
. ! Non-reschedulable fare > button
disabled with tooltip
. ! No flights on new date > suggest
adjacent dates
. Pick new flight:
. View available flights for same route
. Price difference shown per flight
· Select new flight
. Summary & confirm:
. Old vs new itinerary side by side
. Pay price difference (if any)
. Confirm reschedule
. After reschedule:
. New e-ticket emailed
. Original booking marked Rescheduled

Payment Flow

. Payment method:
. Credit / Debit card
. GCash
· PayPal
. Bank transfer
· Card payment:
. Enter card number, name, expiry, CVV
· Submit payment
. ! Invalid card > inline field error
. ! Payment declined > show reason + retry
option
. ! Gateway timeout > 'Card not charged'
message
3DS / OTP:
· Bank OTP or 3D Secure step
· Verification completes payment
. ! User abandons OTP > return to payment
page
. Confirmation:
. Booking ID and PNR displayed
. E-ticket sent to email

Flight Status Flow

. PNR check:
· Navigate to PNR Status page
. Input PNR number (auto-uppercase, 6
chars)
· Submit
. ! Invalid PNR format > inline error, block
submit
. ! PNR not found > 'No booking found'
message
. Status result:
. On Time
. Delayed (shows new time)
. Cancelled
. Boarding
. Landed
. Note: Status uses color + icon + text - never
color alone (accessibility)


Table

Onboarding Flow:

· Login:
· Navigate to /admin (separate URL)
. Enter admin email and password
. Backend checks credentials AND Admin role
. ! Non-admin user > 403 Forbidden
. ! 5 failed attempts > account locked
. ! All login attempts logged to audit trail
. Dashboard:
· KPI tiles: bookings today, revenue, active flights, cancellations
· Sidebar nav: Flights, Users, Bookings, Reports

Flight Management Flow

· Add flight:
. Click + Add Flight
. Fill: Flight No., Airline, Origin, Destination, Date/Times, Aircraft, Seats, Price
. Preview and publish
. ! Duplicate flight number > inline error
. ! Departure after arrival > block save
· Edit flight:
. Click Edit on any flight row
. Pre-filled form with all current values
Save changes
. ! Has active bookings > yellow warning banner showing count
. ! Auto-notifies affected passengers on save
. Delete / deactivate flight:
. Click Delete icon
. Modal shows number of active bookings affected
. Choose: Deactivate (recommended) or Delete permanently
. ! 10+ active bookings > Deactivate is highlighted as safe option

User Management Flow

· User list:
. Search by name or email
. Filter by status or registration date
. View: Name, Email, Status badge, Booking count
. User profile:
· View personal info
. View full booking history (paginated)
. View status history
. Suspend account:
. Click Suspend
Enter mandatory reason
aConfirm > user session terminated, email sent
. ! Reason field empty > block confirmation
. Reactivate account:
. Click Reactivate
. Confirm > account restored, user notified

Booking Management Flow

· Booking list:
· Search by PNR, name, or flight number
. Filter by status, date range, payment status
. Export filtered results as CSV
· Booking detail:
· View: passenger info, payment, flight, seat, meal
. View status history timeline
· Admin cancel booking:
. Click Cancel This Booking
. Enter mandatory reason
. System shows auto-calculated refund amount
. Confirm > booking cancelled, refund queued, passenger notified
. ! Reason field empty > block confirmation

Reports & Export Flow

· Select report type:
. Booking Summary
. Revenue Overview
. Cancellations
. User Activity
. Configure filters:
. Date range (presets: Today, This Week, This Month, Custom)
. Flight or route filter
· Status filter
. ! End date before start date > block and show error
. Generate report:
. Charts at top
. Sortable data table below
. Loads in under 2 seconds
· Export:
. PDF (formatted report)
· CSV (raw data)
. ! Export fails > toast error with Retry button
````

## File: package.json
````json
{
  "name": "skylink-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "axios": "^1.14.0",
    "clsx": "^2.1.1",
    "lucide-react": "^1.16.0",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-hook-form": "^7.72.1",
    "react-icons": "^5.6.0",
    "react-router-dom": "^7.13.2",
    "tailwind-merge": "^3.5.0",
    "zod": "^4.3.6"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.4",
    "@tailwindcss/vite": "^4.2.2",
    "@types/node": "^24.12.0",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^9.39.4",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.4.0",
    "tailwindcss": "^4.2.2",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.57.0",
    "vite": "^8.0.1",
    "vite-plugin-svgr": "^5.2.0"
  }
}
````

## File: README.md
````markdown
# ✈️ SkyLink Airline Reservation System

A web-based airline reservation platform that allows users to search, book, and manage flight reservations efficiently.

---

## 📋 Project Overview

SkyLink is a standalone, browser-based airline reservation system built for both passengers and administrators. It handles the full reservation lifecycle — from flight search and ticket booking to payment processing and admin management.

---

## 👥 User Roles

| Role | Description |
|---|---|
| **Passenger** | Registers, searches for flights, books tickets, and manages reservations |
| **Administrator** | Manages flights, users, and views booking reports |

---

## ⚙️ Core Features

### Passenger
- User registration and login
- Flight search and filtering
- Ticket booking and cancellation / rescheduling
- Secure online payment processing

### Admin
- Add, edit, and delete flights
- Manage user accounts
- View booking reports and system data

---

## 🛠️ Tech Stack (Frontend)

| Tool | Purpose |
|---|---|
| React 19 | UI component framework |
| TypeScript | Type-safe JavaScript |
| Vite | Build tool and dev server |
| Tailwind CSS v4 | Utility-first styling |
| React Router DOM | Client-side routing |

---

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/skylink-frontend.git

# Navigate into the project
cd skylink-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

---

## 📐 Non-Functional Requirements

- **Performance:** System responds within 2 seconds
- **Security:** Encrypted passwords, secure payment gateway
- **Usability:** Clean, intuitive, and mobile-responsive interface
- **Reliability:** Targets 99% uptime availability
- **Compatibility:** Runs on modern browsers (Chrome, Edge, Firefox)

---

## 🔮 Planned Future Enhancements

- Mobile application version
- AI-based flight recommendations
- Loyalty rewards system

---

## 📄 License

This project is developed as part of an academic software engineering requirement. All rights reserved.
````

## File: tsconfig.app.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2023",
    "useDefineForClassFields": true,
    "lib": ["ES2023", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"]
    },

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "exactOptionalPropertyTypes": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
````

## File: tsconfig.json
````json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
````

## File: tsconfig.node.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
````

## File: vite.config.ts
````typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://skylink-backend-uyam.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1'),
      },
    },
  },
})
````
