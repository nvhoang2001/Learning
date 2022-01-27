<template>
    <div
        class="input"
        :style="{
            height: `${inputHeight}px`,
            width,
        }"
    >
        <label
            :for="id"
            class="relative inline-block w-full h-full"
            :style="{
                paddingTop: `${verticalPadding}px`,
                paddingBottom: `${verticalPadding}px`,
            }"
        >
            <span
                class="absolute text-[#3337] left-2 top-4 label transition-all duration-500"
                :class="{
                    inactive: !!value,
                }"
            >
                {{ label }}
            </span>

            <input
                :class="'inline-block w-full h-full ' + inputClass"
                :type="nativeType"
                :id="id"
                :name="name"
                v-if="type === 'input'"
                :value="value"
                @input="$emit('input', $event.target.value)"
            />
            <textarea
                :class="'inline-block w-full h-full ' + inputClass"
                :type="nativeType"
                :id="id"
                :name="name"
                v-else
                :value="value"
                @input="$emit('input', $event.target.value)"
            ></textarea>
        </label>
        <p v-if="errorState" class="text-red-500 text-sm">
            {{ errorMgs }}
        </p>
    </div>
</template>

<script>
import randomGenerateString from "~/utils/randomStringGenerate";
import _debounce from "lodash/debounce";

export default {
    name: "LineInput",
    props: {
        value: {
            type: String,
        },
        type: {
            type: String,
            default: "input",
            validator: function (value) {
                return ["input", "textarea"].indexOf(value) !== -1;
            },
        },
        nativeType: {
            type: String,
            default: "text",
        },
        minimumRow: {
            type: Number,
            default: 1,
        },
        name: {
            type: String,
        },
        label: {
            type: String,
        },
        width: {
            type: String,
        },
        inputClass: { type: String, default: "" },
        errorMgs: {
            type: String,
        },
        errorState: {
            type: Boolean,
        },
        index: {
            type: String,
        },
    },

    emits: ["input", "reset-error-state", "reset"],
    data() {
        const id = this.index + "_" + randomGenerateString(15);
        return { id };
    },
    watch: {
        value: [
            function () {
                const debouncedFunction = _debounce(() => {
                    this.inputValidateHandler();
                }, 500);
                debouncedFunction();
            },
        ],
    },

    computed: {
        inputHeight() {
            if (this.type === "input") {
                return 50;
            }
            return this.minimumRow * 40;
        },
        verticalPadding() {
            if (this.type === "input") {
                return 8;
            }
            return 20;
        },
    },
    methods: {
        inputValidateHandler() {
            if (typeof this.$attrs.validator === "function") {
                if (this.$attrs.validator(this.value)) {
                    this.errorState = false;
                }
                this.$emit("reset-error-state", this.index, this.errorState);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.input {
    margin: 0.5rem 0;

    input,
    textarea {
        --p: 100%;
        background: linear-gradient(#ccc 0 0) bottom / var(--p, 0) 3px no-repeat,
            linear-gradient(rgb(0, 225, 255) 0 0) bottom / var(--d, 0) 3px
                no-repeat;
        transition: 0.5s;

        outline: none;
    }

    textarea {
        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: #777;
        }
    }

    .label {
        &.inactive {
            top: 0;
            bottom: unset;
            left: 0;
            font-size: 0.75rem;
            line-height: 0.75rem;
        }
    }

    &:focus-within {
        .label {
            top: 0;
            bottom: unset;
            left: 0;
            font-size: 0.75rem;
            line-height: 0.75rem;
        }
        input,
        textarea {
            --d: 100%;
            --p: 0;
        }
    }
}
</style>
