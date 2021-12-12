import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import Ride from './Ride';

// TODO validation  

interface UserAttributes {
  user_id: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type UserInput = Optional<UserAttributes, 'user_id'>
export type UserOuput = Required<UserAttributes>

class User extends Model<UserAttributes, UserInput> implements UserAttributes {

  public user_id!: string;
  public email!: string;
  public first_name!: string;
  public last_name!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

// Ride.belongsTo(User, { foreignKey: 'ride_id' });
// Ride.belongsTo(User);



User.init({
  user_id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  }
}, {
  // timestamps: true,
  sequelize: sequelizeConnection,
  tableName: 'users',
  // paranoid: true
  timestamps: false
})

export default User;



// // TODO: Add more relevant class-validator decorators
// @Entity()
// export class User {
  // @PrimaryGeneratedColumn()
  // id!: number;

  // @Column()
  // @IsEmail() // Verify that field is a valid email
  // email!: string;

  // @Column()
  // // @MinLength(8, {
  // //   // Verify  that that password needs at least 8 characters
  // //   message: 'Password is too short'
  // // })
  // password!: string;

  // @Column()
  // // @MinLength(3, {
  // //   // Verify that the name needs at least 3 characters
  // //   message: 'Name is too short'
  // // })
  // name!: string;

  // @CreateDateColumn()
  // createdAt!: string;

  // @UpdateDateColumn()
  // updatedAt!: number;
// }
