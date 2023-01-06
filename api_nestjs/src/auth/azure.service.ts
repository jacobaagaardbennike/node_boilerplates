import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';

@Injectable()
export class AzureADStrategy extends PassportStrategy(BearerStrategy, 'oauth-bearer') {
  constructor() {
    super({
      // eslint-disable-next-line max-len
      identityMetadata: `https://login.microsoftonline.com/b747048d-aa6a-4d7a-af41-2b20e8cd9030.onmicrosoft.com/.well-known/openid-configuration`,
      clientID: 'db622d5b-d32d-4bfd-b3b6-e76aeb4ad0e3',
    });
  }

  async validate(response: any) {
    const { unique_name }: { unique_name: string } = response;

    if (unique_name) {
      return unique_name;
    } else {
      return null;
    }
  }
}
