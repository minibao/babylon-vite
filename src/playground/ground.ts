import * as BABYLON from '@babylonjs/core/Legacy/legacy'
import '@babylonjs/loaders'

export class Ground {
  constructor(private scene: BABYLON.Scene) {
    this._createGround()
    this._createSphere()
  }

  _createGround(): void {
    const { scene } = this

    const mesh = BABYLON.MeshBuilder.CreateGround('ground', { width: 10, height: 10 }, scene)
    new BABYLON.PhysicsAggregate(mesh, BABYLON.PhysicsShapeType.BOX, { mass: 0 }, scene)
  }

  _createSphere(): void {
    const mesh = BABYLON.MeshBuilder.CreateSphere('sphere', { diameter: 2, segments: 32 }, this.scene)
    mesh.position.y = 4

    new BABYLON.PhysicsAggregate(mesh, BABYLON.PhysicsShapeType.SPHERE, { mass: 1, restitution: 0.75 }, this.scene)
  }
}
