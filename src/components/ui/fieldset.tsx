import * as Headless from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import type React from 'react'

export function Fieldset({
  className,
  ...props
}: { className?: string } & Omit<Headless.FieldsetProps, 'as' | 'className'>) {
  return (
    <Headless.Fieldset
      {...props}
      className={twMerge(
        className,
        '[&>*+[data-slot=control]]:mt-6 [&>[data-slot=text]]:mt-1',
      )}
    />
  )
}

export function Legend({
  className,
  ...props
}: { className?: string } & Omit<Headless.LegendProps, 'as' | 'className'>) {
  return (
    <Headless.Legend
      data-slot="legend"
      {...props}
      className={twMerge(
        className,
        'text-base/6 font-semibold text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white',
      )}
    />
  )
}

export function FieldGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="control"
      {...props}
      className={twMerge(className, 'space-y-8')}
    />
  )
}

export function Field({
  className,
  ...props
}: { className?: string } & Omit<Headless.FieldProps, 'as' | 'className'>) {
  return (
    <Headless.Field
      {...props}
      className={twMerge(
        className,
        '[&>[data-slot=label]+[data-slot=control]]:mt-3',
        '[&>[data-slot=label]+[data-slot=description]]:mt-1',
        '[&>[data-slot=description]+[data-slot=control]]:mt-3',
        '[&>[data-slot=control]+[data-slot=description]]:mt-3',
        '[&>[data-slot=control]+[data-slot=error]]:mt-3',
        '[&>[data-slot=label]]:font-medium',
      )}
    />
  )
}

export function Label({
  className,
  ...props
}: { className?: string } & Omit<Headless.LabelProps, 'as' | 'className'>) {
  return (
    <Headless.Label
      data-slot="label"
      {...props}
      className={twMerge(
        className,
        'select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white',
      )}
    />
  )
}

export function Description({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DescriptionProps,
  'as' | 'className'
>) {
  return (
    <Headless.Description
      data-slot="description"
      {...props}
      className={twMerge(
        className,
        'text-base/6 text-zinc-600 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-zinc-400',
      )}
    />
  )
}

export function ErrorMessage({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DescriptionProps,
  'as' | 'className'
>) {
  return (
    <Headless.Description
      data-slot="error"
      {...props}
      className={twMerge(
        className,
        'text-base/6 text-red-600 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-red-500',
      )}
    />
  )
}
