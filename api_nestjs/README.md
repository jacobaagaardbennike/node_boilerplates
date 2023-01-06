# NestJS api with Mikro-orm and Azure AD authentication
This is a boilerplate for NestJS REST api applications that use Mikro-orm (postgres) and Azure AD for authentication

# Run:
npm install
sudo npm i -g @nestjs/cli
npm run start:dev

# Modules
Create modules with:

nest g resource NAME

# DB
OBS: DO NOT DO THIS UNLESS YOU KNOW WHAT YOURE DOING start

npx mikro-orm migration:create
npx mikro-orm migration:up
npx mikro-orm migration:down

If new DB and needs Options seed:
npx mikro-orm seeder:run

OBS: DO NOT DO THIS UNLESS YOU KNOW WHAT YOURE DOING end



# How the project was made and published:

# Dependencies
npm install --save @nestjs/passport passport
npm i passport-azure-ad
npm install --save @nestjs/swagger
npm i @mikro-orm/core @mikro-orm/nestjs @mikro-orm/postgresql @mikro-orm/reflection

# ORM Dev Dependencies
npm i -D @mikro-orm/cli
npm i -D @mikro-orm/migrations
npm i -D @mikro-orm/seeder