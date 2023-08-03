export class Sample {
    hostname: string;
    endpoint: string;
    method: string;

    constructor(endpoint: string, method: string) {
        this.endpoint = endpoint;
        this.method = method;
        this.hostname = 'http://localhost:8000';
    }
}

export class PHPGuzzle extends Sample {
    getCode() {
        return `<?php

$client = new \\GuzzleHttp\\Client();

$response = $client->request('${this.method.toUpperCase()}', '${this.hostname}${this.endpoint}', [
  'headers' => [
    'Accept' => 'application/vnd.api+json, application/json',
    'Authorization' => '',
  ],
]);

echo $response->getBody();`
    }
}

export class HTTP extends Sample {
    getCode() {
        return `${this.method.toUpperCase()} ${this.endpoint} HTTP/1.1
Accept: application/vnd.api+json, application/json
Authorization: 
Host: ${this.hostname.split('//')[1]}`
    }
}

export class CURL extends Sample {
    getCode() {
        return `curl --request ${this.method.toUpperCase()} \\
  --url ${this.hostname}${this.endpoint} \\
  --header 'Accept: application/vnd.api+json, application/json' \\
  --header 'Authorization: '`
    }
}

export class Wget extends Sample {
    getCode() {
        return `wget --quiet \\
  --method ${this.method.toUpperCase()} \\
  --header 'Accept: application/vnd.api+json, application/json' \\
  --header 'Authorization: ' \\
  --output-document \\
  - ${this.hostname}${this.endpoint}`;
    }
}