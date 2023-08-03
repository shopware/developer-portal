# {{ $params.slug }}

<OpenApi api="admin" :endpoint="$params.path" :method="$params.method" />

Test: {{ $params.slug }}

{{ $params }}

<!-- @content -->