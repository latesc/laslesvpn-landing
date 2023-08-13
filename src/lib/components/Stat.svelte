<script lang="ts">
    export let icon: string;
    export let value: string;
    export let label: string;
</script>

<div class="stat">
    <img src={icon} alt={label} />
    <div>
        <h3>{value}</h3>
        <p>{label}</p>
    </div>
</div>

<style lang="postcss">
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
</style>
