<script>
    import ArrowLeft from "$lib/components/icon/arrow-left.svelte";
    import ArrowRight from "$lib/components/icon/arrow-right.svelte";
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
        <div class="stat">
            <img src="/images/icon/user.svg" alt="user icon" />
            <div>
                <h3>10,000+</h3>
                <p>Users</p>
            </div>
        </div>

        <div class="stat">
            <img src="/images/icon/location.svg" alt="location icon" />
            <div>
                <h3>30+</h3>
                <p>Locations</p>
            </div>
        </div>

        <div class="stat">
            <img src="/images/icon/server.svg" alt="server icon" />
            <div>
                <h3>50+</h3>
                <p>Servers</p>
            </div>
        </div>
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
                <div class="plan">
                    <img src="/images/Free.svg" alt="plan icon" />
                    <h2>Free Plan</h2>
                    <ul>
                        <li>Unlimited Bandwidth</li>
                        <li>Basic security and encryption</li>
                        <li>3 countries</li>
                        <li class="cross">1 device only</li>
                        <li class="cross">Limited customer support</li>
                        <li class="cross">Ads</li>
                    </ul>
                    <div class=" mt-auto text-center text-2xl">
                        <p><span class="font-medium text-slate-900">Free</span></p>
                        <button class="btn-outline">Select</button>
                    </div>
                </div>
                <div class="plan">
                    <img src="/images/Standard.svg" alt="plan icon" />
                    <h2>Standard Plan</h2>
                    <ul>
                        <li>Unlimited Bandwidth</li>
                        <li>Advanced security features (kill switch, split tunneling),</li>
                        <li>50+ countries</li>
                        <li>Up to 3 devices</li>
                        <li>Dedicated customer support</li>
                        <li>No ads</li>
                    </ul>
                    <div class=" mt-auto text-center text-2xl">
                        <p>
                            <span class="font-medium text-slate-900">$12</span>
                            <span class="font-normal text-gray-600">/ mo</span>
                        </p>
                        <button class="btn-outline">Select</button>
                    </div>
                </div>
                <div class="plan">
                    <img src="/images/Premium.svg" alt="plan icon" />
                    <h2>Premium Plan</h2>
                    <ul>
                        <li>Unlimited Bandwidth</li>
                        <li>Enhanced security features (double encryption)</li>
                        <li>100+ countries</li>
                        <li>Up to 5 devices</li>
                        <li>Priority customer support</li>
                        <li>Streaming-optimized servers</li>
                        <li>No ads</li>
                    </ul>
                    <div class=" mt-auto text-center text-2xl">
                        <p>
                            <span class="font-medium text-slate-900">$12</span>
                            <span class="font-normal text-gray-600">/ mo</span>
                        </p>
                        <button class="btn">Select</button>
                    </div>
                </div>
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

<style lang="postcss">
    section {
        @apply px-14 py-12 md:px-28;
    }
    #stats,
    #pricing-locations {
        @apply px-4 sm:px-14 lg:px-28;
    }
    .stat {
        @apply m-auto flex h-32 w-full flex-col place-content-center items-center gap-4 md:flex-row md:gap-7;

        & img {
            width: 55px;
            height: 55px;
        }
        & h3 {
            @apply text-2xl font-bold;
        }

        & p {
            @apply text-xl;
        }

        &:not(:nth-of-type(1)) {
            @apply border-l-2 border-l-neutral-100;
        }
    }
    .features {
        & div {
            @apply flex items-center gap-3;
        }
    }
    .plan {
        @apply flex flex-col items-center gap-5 rounded-lg border-2 border-neutral-200 bg-white px-4 py-16 text-sm lg:px-8;
        & h2 {
            @apply text-lg font-medium text-gray-800;
        }

        & ul {
            @apply p-2 text-left;
        }

        & li {
            @apply m-3 pl-2 text-copy-p;
            list-style-image: url("/images/icon/check.svg");
        }

        & li.cross {
            list-style-image: url("/images/icon/cross.svg");
        }
        & button {
            @apply mt-5 h-11 w-24 text-base font-bold transition-colors lg:w-44;
            &.btn-outline {
                @apply rounded-full border border-primary  text-primary  hover:bg-primary hover:text-white;
            }
            &.btn {
                @apply rounded-full bg-primary  text-white drop-shadow-button  hover:bg-primary-dark;
            }
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
</style>
