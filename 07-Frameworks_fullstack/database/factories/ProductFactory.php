<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'uuid' => 'prd-' . Str::uuid(),
            'name' => $this->faker->sentence(1),
            'description' => $this->faker->text(),
            'price' => $this->faker->numberBetween(5, 500),
            'stock' => $this->faker->numberBetween(0, 250),
            'available' => $this->faker->boolean(),
            'image' => $this->faker->imageUrl(),
            'category' => $this->faker->word(),
        ];
    }
}
