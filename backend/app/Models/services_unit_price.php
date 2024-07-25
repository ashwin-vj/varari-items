<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class services_unit_price extends Model
{
    use HasFactory;

    protected $table = 'ld_service_units_price';

    protected $primaryKey = 'id';

    public function washes(): HasMany
    {
        return $this->hasMany(services::class, 'id', 'service_id');
    }
}
