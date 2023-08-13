<script lang="ts">
    export let icon: string;
    export let title: string;
    export let features: string[];
    export let limitations: string[] = [];
    export let price: string;
    export let isHighlighted: boolean = false;
</script>

<div class="plan">
    <img src={icon} alt={title} />
    <h2>{title}</h2>
    <ul>
        {#each features as feature (feature)}
            <li>{feature}</li>
        {/each}
        {#each limitations as limitation (limitation)}
            <li class="cross">{limitation}</li>
        {/each}
    </ul>
    <div class="plan-details">
        <p>
            {#if price === "Free"}
                <span class="font-medium text-slate-900">{price}</span>
            {:else}
                <span class="font-medium text-slate-900">${price}</span>
                <span class="font-normal text-gray-600">/ mo</span>
            {/if}
        </p>
        <button class={isHighlighted ? "btn" : "btn-outline"}> Select </button>
    </div>
</div>

<style lang="postcss">
    .plan {
        @apply flex h-full flex-col items-center gap-5 rounded-lg border-2 border-neutral-200 bg-white px-4 py-16 text-sm lg:px-8;
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

        .plan-details {
            @apply flex flex-col items-center gap-5;
            & p {
                @apply text-2xl font-bold;
            }
        }

        & button {
            @apply mt-5 h-11 w-24 text-base font-bold transition-colors lg:w-44;
            &.btn-outline {
                @apply rounded-full border-2 border-primary  text-primary  hover:bg-primary hover:text-white;
            }
            &.btn {
                @apply rounded-full bg-primary  text-white drop-shadow-button  hover:bg-primary-dark;
            }
        }
    }
</style>
