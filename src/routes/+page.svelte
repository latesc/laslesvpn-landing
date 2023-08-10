<script>
    import Plan from "$lib/components/Plan.svelte";
    import Stat from "$lib/components/Stat.svelte";
    import ArrowLeft from "$lib/components/icon/arrow-left.svelte";
    import ArrowRight from "$lib/components/icon/arrow-right.svelte";
    import FacebookIcon from "$lib/components/icon/facebook.svelte";
    import InstagramIcon from "$lib/components/icon/instagram.svelte";
    import TwitterIcon from "$lib/components/icon/twitter.svelte";
</script>

<section id="hero">
    <div class="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row-reverse md:items-center">
        <div class="mt-8 md:mt-0 md:w-5/9">
            <img class="h-full w-full" src="/images/hero_illustration.svg" alt="VPN Service" />
        </div>
        <div class="md:w-4/9">
            <h1 class="text-5xl font-medium text-gray-800">
                Make Everything Easy with <b>LaslesVPN.</b>
            </h1>
            <p class="mt-5 text-gray-600">
                Experience a network that caters to all your needs with simplicity and enjoyment
                using <span class="font-medium">LaslesVPN</span>. Discover fascinating features from
                us.
            </p>
            <button
                class="drop- mt-12 h-16 w-64 rounded-lg bg-primary font-bold text-white drop-shadow-button transition-colors hover:bg-primary-dark"
                >Get Started</button
            >
        </div>
    </div>
</section>
<section id="stats">
    <div
        class="px-29 mx-auto grid max-w-6xl grid-cols-3 items-center justify-items-center bg-white py-9 drop-shadow-stats"
    >
        <Stat icon="/images/icon/server.svg" value="90+" label="Server" />
        <Stat icon="/images/icon/location.svg" value="30+" label="Locations" />
        <Stat icon="/images/icon/user.svg" value="50+" label="Users" />
    </div>
</section>

<section id="features">
    <div class="mx-auto mb-12 flex max-w-6xl flex-col gap-16 md:flex-row md:items-center">
        <div class="md:w-1/2">
            <img class="h-full w-full" src="/images/features_illustration.svg" alt="VPN Service" />
        </div>
        <div class="mt-8 md:mt-0 md:w-1/2">
            <h1 class="text-4xl font-medium text-gray-800">Discover the Many Features We Offer</h1>
            <p class="mt-5">
                Explore the exciting range of features that we provide, each with its own unique
                function.
            </p>
            <div class="mt-5">
                <div class="features flex flex-col gap-5 text-sm">
                    <div>
                        <img src="/images/icon/check_filled.svg" alt="check icon" />
                        <p>Experience powerful online protection.</p>
                    </div>
                    <div>
                        <img src="/images/icon/check_filled.svg" alt="check icon" />
                        <p>Enjoy internet without borders.</p>
                    </div>
                    <div>
                        <img src="/images/icon/check_filled.svg" alt="check icon" />
                        <p>Get a supercharged VPN.</p>
                    </div>
                    <div>
                        <img src="/images/icon/check_filled.svg" alt="check icon" />
                        <p>No time limits.</p>
                    </div>
                    <div>
                        <img src="/images/icon/check_filled.svg" alt="check icon" />
                        <p>Stay private on the internet.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="pricing-locations" class="bg-gradient-to-b from-zinc-100 to-white">
    <div
        class="mx-auto my-16 flex w-full max-w-6xl flex-col items-center justify-center gap-10 text-center"
    >
        <div id="pricing" class="w-full">
            <h1 class="text-4xl font-medium text-gray-800">Choose Your Plan</h1>
            <p class="mx-auto mt-5 md:w-1/2">
                Discover the perfect package that suits you best and embark on a joyful and
                delightful exploration.
            </p>
            <div class="mt-16 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
                <Plan
                    icon="/images/Free.svg"
                    title="Free Plan"
                    features={[
                        "Unlimited Bandwidth",
                        "Basic security and encryption",
                        "3 countries"
                    ]}
                    limitations={["1 device only", "Limited customer support", "Ads"]}
                    price="Free"
                    isHighlighted={false}
                />
                <Plan
                    icon="/images/Standard.svg"
                    title="Standard Plan"
                    features={[
                        "Unlimited Bandwidth",
                        "Advanced security features (kill switch, split tunneling)",
                        "50+ countries",
                        "Up to 3 devices",
                        "Dedicated customer support",
                        "No ads"
                    ]}
                    price="9"
                    isHighlighted={false}
                />
                <Plan
                    icon="/images/Premium.svg"
                    title="Premium Plan"
                    features={[
                        "Unlimited Bandwidth",
                        "Enhanced security features (double encryption)",
                        "100+ countries",
                        "Up to 5 devices",
                        "Priority customer support",
                        "Streaming-optimized servers",
                        "No ads"
                    ]}
                    price="12"
                    isHighlighted={true}
                />
            </div>
        </div>
        <div id="locations" class="mt-20">
            <h1 class="mx-auto mt-5 text-4xl font-medium text-gray-800">
                Powerful and Fast VPN with a Global Network
            </h1>
            <p class="mx-auto mt-5 md:w-1/2">
                Experience the widespread coverage of <span class="font-medium">LaslesVPN</span>,
                ensuring seamless connectivity no matter where you are.
            </p>
            <img class="mt-36" src="/images/huge_global.svg" alt="VPN Service" />
        </div>
    </div>
</section>

<section id="company">
    <div
        class="mx-auto flex w-full max-w-6xl flex-row flex-wrap items-center justify-center gap-10"
    >
        <img src="/images/logo/Netflix.svg" alt="netflix logo" />
        <img src="/images/logo/Reddit.svg" alt="reddit logo" />
        <img src="/images/logo/Amazon.svg" alt="amazon logo" />
        <img src="/images/logo/Discord.svg" alt="discord logo" />
        <img src="/images/logo/Spotify.svg" alt="spotify logo" />
    </div>
</section>

<section id="testimonials">
    <div class="mx-auto flex h-max w-full max-w-6xl flex-col items-center justify-center gap-10">
        <h1 class="text-4xl font-medium text-gray-800">Trusted by Thousands of Happy Customers</h1>
        <p>
            Hear from our happy customers who have experienced the thrill of using this amazing
            feature.
        </p>
        <div class="mt-16 grid w-max grid-cols-1 gap-8 md:grid-cols-3">
            <div class="testimonial">
                <div>
                    <img src="/images/avatar-1.png" alt="avatar" />
                    <h3 class="text-xl font-medium">Viezh Robert</h3>
                    <p class="text-gray-600">Warsaw, Poland</p>
                    <span>
                        <h4>4.5</h4>
                        <img src="/images/icon/star.svg" alt="rating" />
                    </span>
                </div>
                <p class="mt-5 text-center">
                    “Wow... I am very happy to use this VPN, it turned out to be more than my
                    expectations and so far there have been no problems. LaslesVPN always the best”
                </p>
            </div>
            <div class="testimonial">
                <div>
                    <img src="/images/avatar-2.png" alt="avatar" />
                    <h3 class="text-xl font-medium">Yessica Christy</h3>
                    <p class="text-gray-600">Shanxi, China</p>
                    <span>
                        <h4>4.5</h4>
                        <img src="/images/icon/star.svg" alt="rating" />
                    </span>
                </div>
                <p class="mt-5 text-center">
                    “I like it because I like to travel far and still can connect with high speed.”
                </p>
            </div>
            <div class="testimonial">
                <div>
                    <img src="/images/avatar-3.png" alt="avatar" />
                    <h3 class="text-xl font-medium">Kim Young Jou</h3>
                    <p class="text-gray-600">Seoul, South Korea</p>
                    <span>
                        <h4>4.5</h4>
                        <img src="/images/icon/star.svg" alt="rating" />
                    </span>
                </div>
                <p class="mt-5 text-center">
                    “This is very unusual for my business that currently requires a virtual private
                    network that has high security.”
                </p>
            </div>
        </div>
        <div class="flex w-full items-center justify-between gap-5">
            <div class="flex items-center gap-3">
                <button class="flex h-3 w-11 items-center justify-center rounded-full bg-primary" />
                <button class="flex h-3 w-3 items-center justify-center rounded-full bg-zinc-200" />
                <button class="flex h-3 w-3 items-center justify-center rounded-full bg-zinc-200" />
            </div>
            <div class="flex items-center gap-5">
                <button
                    class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary"
                >
                    <ArrowLeft fill="rgb(245 56 56)" />
                </button>
                <button
                    class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary"
                >
                    <ArrowRight fill="#FFF" />
                </button>
            </div>
        </div>
    </div>
</section>
<section id="cta">
    <div
        class="max-w-96 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-10 rounded-lg bg-white px-16 py-14 text-center drop-shadow-stats lg:flex-row lg:justify-between lg:text-left"
    >
        <span class=" w-96">
            <h1 class="text-4xl font-medium text-gray-800">
                Subscribe Now to Get Special Features!
            </h1>
            <p class="mt-2">Let's subscribe with us and find the fun.</p>
        </span>
        <button
            class="rounded-lg bg-primary px-16 py-4 font-bold text-white drop-shadow-button transition-colors hover:bg-primary-dark"
            >Subscribe Now</button
        >
    </div>
</section>
<footer class="bg-stone-50 pb-20 pt-12">
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-between md:flex-row-reverse">
        <div class="flex justify-between gap-8 px-14 md:w-1/2">
            <div>
                <h3>Product</h3>
                <ul class="mt-5 text-gray-600">
                    <li><button>Download</button></li>
                    <li><button>Pricing</button></li>
                    <li><button>Locations</button></li>
                    <li><button>Server</button></li>
                    <li><button>Countries</button></li>
                    <li><button>Blog</button></li>
                </ul>
            </div>
            <div>
                <h3>Engage</h3>
                <ul class="mt-5 text-gray-600">
                    <li><button>LaslesVPN ?</button></li>
                    <li><button>FAQ</button></li>
                    <li><button>Tutorials</button></li>
                    <li><button>About Us</button></li>
                    <li><button>Privacy Policy</button></li>
                    <li><button>Terms of Service</button></li>
                </ul>
            </div>
            <div>
                <h3>Earn Money</h3>
                <ul class="mt-5 text-gray-600">
                    <li><button>Affiliate</button></li>
                    <li><button>Become Partner</button></li>
                </ul>
            </div>
        </div>
        <div class="w-96">
            <span class="flex items-center gap-2">
                <img src="/images/logo.svg" alt="logo" />
                <h2 class="font-medium">Lasles<b>VPN</b></h2>
            </span>
            <p class="mt-5 text-gray-600">
                <b>LaslesVPN</b> is a private virtual network that has unique features and has high security.
            </p>
            <div class="mt-6 flex gap-4">
                <button
                    class="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md"
                >
                    <FacebookIcon />
                </button>
                <button
                    class="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md"
                >
                    <TwitterIcon />
                </button>
                <button
                    class="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md"
                >
                    <InstagramIcon />
                </button>
            </div>
            <p class="mt-6 text-gray-400">©Lasles<b>VPN</b> 2020. All Rights Reserved</p>
        </div>
    </div>
</footer>

<style lang="postcss">
    section {
        @apply px-14 py-12 md:px-28;
    }
    #stats,
    #pricing-locations {
        @apply px-4 sm:px-14 lg:px-28;
    }
    .features {
        & div {
            @apply flex items-center gap-3;
        }
    }
    .testimonial {
        @apply flex h-full w-96 flex-col items-center rounded-lg border-2 border-neutral-200 bg-white p-4 text-sm xl:p-7;
        min-height: max-content;

        & > div {
            @apply grid w-full grid-cols-3 gap-x-2 xl:gap-x-5;
            grid-template-columns: auto 1fr auto;
            grid-template-areas: "avatar name rating" "avatar location rating";

            & img {
                @apply row-span-2 rounded-full;
                grid-area: avatar;
            }
            & h3 {
                @apply text-lg font-medium text-gray-800;
                grid-area: name;
            }
            & p {
                @apply text-gray-600;
                grid-area: location;
            }
            & span {
                @apply row-span-2 flex items-center gap-2;
                grid-area: rating;

                & h4 {
                    @apply font-normal;
                }
                & img {
                    @apply h-5 w-5;
                }
            }
        }
        & > p {
            @apply mt-4 text-left;
        }
    }
    #cta {
        @apply bg-white;
        background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, #fafaf9 50%);
    }
    footer {
        & h2 {
            @apply text-xl;
        }
        & h3 {
            @apply text-lg font-medium text-gray-800;
        }
        & li {
            @apply mb-4 cursor-pointer transition-colors hover:text-gray-400;
        }
    }
    .testimonial {
        @apply flex h-full w-96 flex-col items-center rounded-lg border-2 border-neutral-200 bg-white p-4 text-sm xl:p-7;
        min-height: max-content;

        & > div {
            @apply grid w-full grid-cols-3 gap-x-2 xl:gap-x-5;
            grid-template-columns: auto 1fr auto;
            grid-template-areas: "avatar name rating" "avatar location rating";

            & img {
                @apply row-span-2 rounded-full;
                grid-area: avatar;
            }
            & h3 {
                @apply text-lg font-medium text-gray-800;
                grid-area: name;
            }
            & p {
                @apply text-gray-600;
                grid-area: location;
            }
            & span {
                @apply row-span-2 flex items-center gap-2;
                grid-area: rating;

                & h4 {
                    @apply font-normal;
                }
                & img {
                    @apply h-5 w-5;
                }
            }
        }
        & > p {
            @apply mt-4 text-left;
        }
    }
    #cta {
        @apply bg-white;
        background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, #f8f8f8 50%);
    }
</style>
