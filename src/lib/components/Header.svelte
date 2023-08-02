<!-- navigation component for the landing page of a VPN service which includes: the logo, page sections (about, features, pricing, testimonials, help), and a sign in and sign up button -->
<header class="sticky top-0 z-nav my-6 bg-white px-28 py-6">
    <div class="mx-auto flex max-w-6xl items-center justify-between">
        <div class="flex items-center gap-2">
            <img src="/images/logo.svg" alt="LaslesVPN" />
            <h3 class="text-xl font-medium">Lasles<b>VPN</b></h3>
        </div>

        <nav class="flex items-center gap-8">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#help">Help</a>
        </nav>
        <div class="flex items-center gap-10">
            <button class="p-2 text-gray-600 hover:text-gray-800">Sign In</button>
            <button
                class="h-11 w-36 rounded-full border border-primary font-bold text-primary transition-colors hover:bg-primary hover:text-white"
                >Sign Up</button
            >
        </div>
    </div>
</header>

<style lang="postcss">
    nav a {
        @apply p-2 text-gray-600 hover:text-gray-800;
    }
</style>
