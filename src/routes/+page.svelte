<section id="hero">
    <div class="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
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
                class="drop- mt-12 h-16 w-64 rounded-xl bg-primary font-bold text-white drop-shadow-button transition-colors hover:bg-primary-dark"
                >Get Started</button
            >
        </div>
        <div class="mt-8 md:mt-0 md:w-5/9">
            <img
                class="h-full w-full rounded"
                src="/images/hero_illustration.svg"
                alt="VPN Service"
            />
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
    <div class="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
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
                        <img src="/images/icon/check.svg" alt="check icon" />
                        <p>Experience powerful online protection.</p>
                    </div>
                    <div>
                        <img src="/images/icon/check.svg" alt="check icon" />
                        <p>Enjoy internet without borders.</p>
                    </div>
                    <div>
                        <img src="/images/icon/check.svg" alt="check icon" />
                        <p>Get a supercharged VPN.</p>
                    </div>
                    <div>
                        <img src="/images/icon/check.svg" alt="check icon" />
                        <p>No time limits.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="postcss">
    section {
        @apply px-28 py-12;
    }
    .stat {
        @apply m-auto flex h-32 w-full flex-row place-content-center items-center gap-9;

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
</style>
