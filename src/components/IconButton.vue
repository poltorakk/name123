<template>
    <div class="flex-wrap">
        <button
            :class="[
                'icon-button',
                'icon-button__' + buttonSize,
                'icon-button__' + buttonType,
            ]"
        >
            <div
                class="icon-button__icon"
                :style="{ backgroundImage: iconURL }"
            ></div>
        </button>
        <h3 class="menu-items-regular">{{ buttonText }}</h3>
    </div>
</template>

<script>
export default {
    name: "IconButton",
    props: {
        buttonSize: {
            required: true,
            validator: function (value) {
                return ["large", "big", "small", "tiny"].includes(value);
            },
            type: String,
        },
        buttonType: {
            required: true,
            validator: function (value) {
                return ['default', 'dark', 'dark__red'].includes(value)
            },
            type: String,
        },
        icon: {
            required: true,
            type: String,
        },
        buttonText: {
            type: String,
            required: false
        }
    },
    computed: {
        iconURL() {
            return "url('" + this.iconPath + "')";
        },
        iconPath() {
            return ('/assets/icons/' + this.icon);
        },
    },
};
</script>

<style lang="scss" scoped>
.flex-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
}

.icon-button {
    display: flex;
    align-items: center;
    width: max-content;
    height: max-content;

    &:hover {
        cursor: pointer;
    }

    &__default {
        background: linear-gradient(var(--action), var(--action)) padding-box,
            var(--action) border-box;
        border: 1px solid transparent;

        & .icon-button__icon {
            background: var(--white);
        }
    }

    &__large {
        padding: 10px;
        border-radius: 12px;
    }

    &__large &__icon {
        height: 25px;
        width: 25px;
        mask-size: 20px;
    }

    &__big,
    &__small {
        padding: 8px;
        border-radius: 8px;
    }

    &__big &__icon {
        height: 16px;
        width: 16px;
        mask-size: 16px;
    }

    &__small &__icon {
        height: 12px;
        width: 12px;
        mask-size: 12px;
    }

    &__tiny {
        padding: 4px;
        border-radius: 4px;
    }

    &__tiny &__icon {
        height: 10px;
        width: 10px;
        mask-size: 10px;
    }
}
</style>
